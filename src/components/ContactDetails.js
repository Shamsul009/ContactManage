import React from "react";
import {Link} from "react-router-dom";
import { useLocation,useParams } from 'react-router-dom';

const ContactDetail = (props) =>{
   
   const {data} = useParams;
   console.log(typeof data);
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="content">
                    <div className="header">data</div>
                    <div className="description">email</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        Back to contact
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetail;