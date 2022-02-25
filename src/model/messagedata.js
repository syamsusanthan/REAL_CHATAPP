const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/CHATAPP',{useNewUrlParser:true, useUnifiedTopology:true});
const schema=mongoose.Schema;
const messageSchema=new schema({
    sender:String,
    reciever:String,
    message:String
})
var messagedata=mongoose.model('messagedata',messageSchema);
module.exports=messagedata;