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
const messagedata = require('./src/model/messagedata');
let io = socketIO(server);
const port = process.env.PORT || 3600;


io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user joined');
    });

    socket.on('message', (data) => {
        io.in(data.room).emit('new message', {user: data.user, message: data.message, toUser:data.toUser,userName:data.userName});
    });
    socket.on('room message',async (data) => {
       try{
           io.emit('new room message', {user: data.user, message: data.message, userName:data.userName});
        } 
        catch{
        }
       
    });

    socket.on('deleteUser',async (data)=>{
        var signselect=await signdata.findOne({"phone":data.userId});
        var chatselect=await chatuser.findOne({"selectedPhone":data.userId});
        var roomselect=await roomsdata.findOne({"roomsId":data.userId});
        signdata.findByIdAndDelete({_id:signselect._id},{new:true, useFindAndModify:false}).then(()=>{});
        chatuser.findByIdAndDelete({_id:chatselect._id},{new:true, useFindAndModify:false}).then(()=>{});
        roomsdata.findByIdAndDelete({_id:roomselect._id},{new:true, useFindAndModify:false}).then(()=>{});
    });

    socket.on('deleteRoom',async (data)=>{
        var select=await roomsdata.findOne({"room":data.roomId});
        roomsdata.findByIdAndDelete({_id:select._id},{new:true, useFindAndModify:false}).then(()=>{});
    });

    socket.on('selection', async (data) => {
        try{
            var selection={
                selectedName:data.selectedName,
                selectedPhone:data.selectedPhone,
                selectedRoom:data.roomId
            }
            var select=await chatuser.findOne({"selectedPhone":selection.selectedPhone});
           if(select){
            if(select.selectedRoom!=data.roomId){
                await chatuser.findByIdAndUpdate({_id:select._id},{$set:{
                    selectedRoom:data.roomId
                }},{new:true, useFindAndModify:false})
                .then(()=>{});
            }
           }
           else{
            var selectdata=chatuser(selection);
            selectdata.save();console.log('saved');
           }
        }
        catch(e){
            console.log(e)
        }
       
        
    });
    socket.on('deselection',async (data) => {
        var select=await chatuser.findOne({"selectedPhone":data.selectedPhone});
        if(select){
        chatuser.findByIdAndDelete({_id:select._id},{new:true, useFindAndModify:false}).then(()=>{});
        }
        else{
        }
    });
    socket.on('block',async (data)=>{
        var select=await chatuser.findOne({"selectedPhone":data.selectedphone});
        if(select){
            chatuser.findByIdAndUpdate({_id:select._id},{$set:{
                block:data.blockdata
            }},{new:true, useFindAndModify:false})
            .then(()=>{});
            io.emit('already',{blockedno:data.selectedphone, blockmessage:data.blockdata});
        }
    });
    socket.on('unblock',async (data)=>{
        var select=await chatuser.findOne({"selectedPhone":data.selectedphone});
        if(select){
            chatuser.findByIdAndUpdate({_id:select._id},{$set:{
                block:data.blockdata
            }},{new:true, useFindAndModify:false})
            .then(()=>{});
            io.emit('already',{blockedno:data.selectedphone, blockmessage:data.blockdata})
        }
    });
    socket.on('mute',async (data)=>{
        var select=await chatuser.findOne({"selectedPhone":data.selectedphone});
        if(select){
            chatuser.findByIdAndUpdate({_id:select._id},{$set:{
                mute:data.mutedata
            }},{new:true, useFindAndModify:false})
            .then(()=>{});
            io.emit('already',{blockedno:data.selectedphone, blockmessage:data.blockdata})
        }
    });
    socket.on('unmute',async (data)=>{
        try{
            var unmute=await chatuser.findOne({"selectedPhone":data.selectedphone});
            if(unmute){
                chatuser.findByIdAndUpdate({_id:unmute._id},{$set:{
                    mute:data.mutedata
                }},{new:true, useFindAndModify:false})
                .then(()=>{});
                io.emit('already',{blockedno:data.selectedphone, blockmessage:data.blockdata})
            }
        }
        catch(e){}
   
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
        password:req.body.password,
        block:req.body.block,
        mute:req.body.mute
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

app.get('/*',function (req,res){
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'))
})

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});