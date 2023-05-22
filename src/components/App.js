import React ,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
 import Contact from "./Contact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetails";

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([]);
  
  const addContactHandler = (contact)=>{
      console.log(contact);
      setContacts([...contacts,contact]);
  }
  useEffect(()=>{
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(retriveContacts){
        setContacts(retriveContacts);
      }
  },[ ])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

  return (
    <div className="ui container">
      <Router>
          <br></br>
          <br></br>
          <Header/>
          <br></br>
          <Routes>
          <Route path="/" element={<ContactList contacts={contacts} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contact/:name" element={<ContactDetail />} />
          </Routes>
         
         
      </Router>
     
    </div>
  );

}

export default App;
