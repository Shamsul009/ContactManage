import React from "react";
import ContactList from "./ContactList";
import {Link} from "react-router-dom";
const CardContact = (props) =>{
    const {name,email} = props.contact;
    return(
        <div className="item">
            <Link to ={{pathname:`/contact/${name}`,state:{contact : props.contact}}}>
                <div className="content">
                    <div className="header">{name}</div>
                    <div >{email}</div>
                </div>
            </Link>
                
                <i className="trash alternate outline icon" style={{
                    color:"red", marginTop:"7px"
                }}></i>
    
            </div>
    );
}

export default CardContact;