//@desc Get all contacts
const Contact = require("../models/contactModel");
const getContacts = async(req,res)=>{
    const contacts =await Contact.find();
    res.status(200).json(contacts);
};

const createContact = async (req,res)=>{
    console.log(req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are necessary");
    }
    const contact = await Contact.create({
        name,email,phone
    });
    res.status(201).json({
        contact
    });
};


const getContact = async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }

    res.status(200).json({
        message : `Get contacts for ${req.params.id}`
    });
};


const updateContact = async (req,res)=>{

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new : true
        }
    );



    res.status(200).json({
        message : `Update contacts for ${req.params.id}`
    });
};



const deleteContact = async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }
    await Contact.findOneAndDelete();

    res.status(200).json(contact);
};





module.exports = {getContacts,createContact,getContact,updateContact,deleteContact}