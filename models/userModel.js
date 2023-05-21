 const { Timestamp } = require("bson");
const mongoose = require("mongoose");

 const userSchema = mongoose.Schema({
    username : {
        type:String,
        required:[true,"Please Enter the username"]
    },
    email : {
        type:String,
        required:[true,"Please Enter the email"],
        unique:[true,"Email address already taken"]
    },
    password:{
        type: String,
        required:[true,"Please add the use password"]
    },
 },
 {
    timestamp: true
 });

 module.exports = mongoose.model("User",userSchema);