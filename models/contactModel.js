const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please add the contact name"]
    },
    email : {
        type : String,
        required : [true,"PLease add the contact email"]
    },
    phone : {
        type : String,
        require : [true, "Please enter the valid PhoneNumber"]
    }
},
    {
    timestamps : true
    }
);

module.exports = mongoose.model("Contact",contactSchema);