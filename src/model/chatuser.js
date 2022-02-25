const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@syamsfile.jor9c.mongodb.net/CHATAPP?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
const schema=mongoose.Schema;
const userSchema=new schema({
    selectedName:String,
    selectedPhone:String,
    selectedRoom:String
});
var chatuser=mongoose.model('chatuser',userSchema);
module.exports=chatuser;