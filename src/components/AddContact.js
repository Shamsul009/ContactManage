import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const AddContact = ({addContactHandler}) =>{
    const navigate  = useNavigate();
    const [name , setName] = useState("");
    const [email,setEmail] = useState("");

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        if(name==="" && email===""){
            alert("All the fields are mandatory");
            return;
        }
        addContactHandler({name,email});
        setName("");
        setEmail("");
        
        navigate("/");

    }

    

    

    return(
        <div className="ui main">
            <br></br>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={handleSubmit}>

                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name"
                    value={name} onChange={handleNameChange}/>
                    
                </div>

                <div className="field">
                    <label>Email</label>
                    <input type="text" name="name" placeholder="Enter Your Email"
                    value={email} onChange={handleEmailChange}
                    />
                    
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}

export default AddContact