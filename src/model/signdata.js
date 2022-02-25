const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@syamsfile.jor9c.mongodb.net/CHATAPP?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
const schema=mongoose.Schema;
const signSchema=new schema({
    name:String,
    phone:String,
    password:String
})
var signdata=mongoose.model('signupdata',signSchema);
module.exports=signdata;