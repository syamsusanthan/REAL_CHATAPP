const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@syamsfile.jor9c.mongodb.net/CHATAPP?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
const schema=mongoose.Schema;
const messageSchema=new schema({
    sender:String,
    reciever:String,
    message:String
})
var messagedata=mongoose.model('messagedata',messageSchema);
module.exports=messagedata;