const { use } = require("../routes/contactRoutes");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const registerUser = async(req,res)=>{
    const{username,email,password} = req.body;
    if(!username || !email || !password){
       res.status(400);
       throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already Taken");
    }

    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword);

    const user = await User.create({
        username,
        email,
        password:hashedPassword
    });

    if(user){
        res.status(201).json({_id:user.id , email:user.email});
    }
    else{
        res.status(400);
        throw new Error("User data are not valid");
    }
    res.json({
        message:"Register the User"
    })
};

const loginUser = async(req,res)=>{

    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const user = await User.findOne({email});
    if(user && bcrypt.compare(password,user.password)){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email: user.email,
                id: user.id
            },
        },process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: "1m"}
        );
        res.status(200).json({accessToken});
    }
    else{
        res.status(401);
        throw new Error("Validation Error");
    }
};

const currentUser = async(req,res)=>{
    res.json({
        message:"Current the User"
    })
};

module.exports = {registerUser,loginUser,currentUser}