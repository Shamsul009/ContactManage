import React from "react";
import CardContact from "./ContactCard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const ContactList = (props) => {
    console.log(props);
    // const contacts = [
    //     {
    //         id:1,
    //         "name":"Arifeen",
    //         "email":"arifeen@gmail.com"
    //     }
    // ]
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <CardContact contact={contact}></CardContact>
        );
    });
    return(
        <div class="main">
            <h2>Contact List </h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            
             <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
       
    );
}

export default ContactList;