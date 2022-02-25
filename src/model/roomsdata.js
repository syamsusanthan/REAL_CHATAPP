const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@syamsfile.jor9c.mongodb.net/CHATAPP?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
const schema=mongoose.Schema;
const roomSchema=new schema({
    room:String,
    userId:String
})
var roomsdata=mongoose.model('chatroomdata',roomSchema);
module.exports=roomsdata;