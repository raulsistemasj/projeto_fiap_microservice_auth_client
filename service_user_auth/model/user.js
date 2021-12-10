const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const table_user = mongoose.Schema({
    username:{type:String, required: true},
    email:{type:String, unique: true, required: true},
    password:{type:String, required: true,
                           minlength:[4,'Minimo de 4 caracteres']},
    telefone:{type:Number},
    nomecompleto:{type:String, required: true},
    createdat:{type:Date,default:Date.now}
})

table_user.pre('save',function(next){
    let user = this
    if(!user.isModified('password')) return next()
    bcrypt.hash(user.password,8,(erro,hashpassword)=>{
        user.password = hashpassword;
        return next();
    })
})


module.exports = mongoose.model("users",table_user);