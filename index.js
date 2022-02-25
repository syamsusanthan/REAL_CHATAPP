let express = require('express');
let cors=require('cors');
let bp=require('body-parser');
const signdata=require('./src/model/signdata');
const roomsdata=require('./src/model/roomsdata');
const chatuser=require('./src/model/chatuser');
const jwt=require('jsonwebtoken');
const path=require('path')
let app = express();
app.use(cors());
app.use(bp.json());
app.use(express.static('./dist/frontend'))

let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);
const port = process.env.PORT || 3600;


io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user joined');
    });

    socket.on('message', (data) => {
        io.in(data.room).emit('new message', {user: data.user, message: data.message, toUser:data.toUser});
    });
    socket.on('room message', (data) => {
        io.emit('new room message', {user: data.user, message: data.message, toUser:data.toUser});
    });

    socket.on('selection', async (data) => {
        try{
            var selection={
                selectedName:data.selectedName,
                selectedPhone:data.selectedPhone,
                selectedRoom:data.selectedRoom
            }
            var select=await chatuser.findOne({"selectedPhone":selection.selectedPhone});
           if(select){
            io.in(data.room).emit('already',{msg2:'already'});
           }
           else{
            var selectdata=chatuser(selection);
            selectdata.save();
           }
        }
        catch(e){
            console.log(e)
        }
       
        
    });
    socket.on('deselection',async (data) => {
        var select=await chatuser.findOne({"selectedPhone":data.selectedPhone});
        if(select){
        chatuser.findByIdAndDelete({_id:select._id},{new:true, useFindAndModify:false}).then(()=>{})
        }
        else{
            console.log('deselect')
        }
    });
});

app.post('/api/log',async (req,res)=>{
    
    try{
        var phone=req.body.phone;
        var password=req.body.password;
    var currentUser=await signdata.findOne({"phone":phone});
    if(currentUser){
        if(currentUser.password==password){
            let payload={subject:phone}
            let token=jwt.sign(payload,'secretKey');
           return res.send({msg:'yes',token:token});
        }
        else{
            return res.send({msg:'invalid'})
        }
        
    }
    else{
        return res.send({msg:'no'});
    }
    }
    catch(e){
        return res.send({msg:'no'});
    }
});


app.post('/api/sin',async(req,res)=>{
    try{
       var userdata={
        name:req.body.name,
        phone:req.body.phone,
        password:req.body.password
       }
        var user=await signdata.findOne({phone:userdata.phone}); 
        if(user){
            return res.send({msg:'fail'});
        }
        else{
            var user=new signdata(userdata);
            user.save();
            return res.send({msg:'success'});
        }
   } 
   catch(error){
       return res.send({msg:'some error occured'});
}
});


app.get('/api/get',(req,res)=>{
    signdata.find().then((usersList)=>{
       userList=usersList;
       roomsdata.find().then((roomsList)=>{
        roomList=roomsList;
        chatuser.find().then((roomsUserList)=>{
            roomUserList=roomsUserList;
            return res.send({uList:userList,rList:roomList,chatUserList:roomUserList});
        })
      
     });
    });
   
   
});

app.post('/api/room',async(req,res)=>{
    try{
       var roomdata={
        room:req.body.room,
        userId:req.body.senderId
       }
       var selectedroom={
        selectedName:req.body.name,
        selectedPhone:req.body.senderId,
        selectedRoom:req.body.room
    }
         
    
        var roomId=await roomsdata.findOne({room:roomdata.room}); 
        if(roomId){
            return res.send({msg1:'exist'});
        }
        else{
            var selectdata=chatuser(selectedroom);
             selectdata.save();
            var roomdetails=new roomsdata(roomdata);
            roomdetails.save();
            return res.send({msg1:'created'});
        }
   } 
   catch(error){
       return res.send({msg1:'some error occured'});
}
});

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname + "/dist/frontend/index.html"))
})

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});