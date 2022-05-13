import React, { useState } from 'react'
import "./style.css"
import contact_us from "./contact_us.svg"

export const Form2 = () => {
  const [records, setRecords] = useState([]);

  const [userContact, setuserContact] = useState({
      email: "",
      phone: "",
      message: ""
    });

  const handleInput = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setuserContact({...userContact, [name] : value})
    
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord={...userContact}
    setRecords([...records, newRecord]);
    setuserContact({email: "", phone: "", message: ""})
    }
   
  return (
    <div className="container">
      <div className="forms-container">
        <div className="contactUs">
          <div className="contact-us-form">

          <form action="" method='POST' onSubmit={handleSubmit} > 
            <h2 className="title">Contact Us</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email"
               value={userContact.email}
               onChange={handleInput}
               name="email"
               placeholder="Email id"
               required />
            </div>
            <div className="input-field">
              <i className="fas fa-phone fa-rotate-90"></i>
              <input type="text"
              value={userContact.phone}
              onChange={handleInput}
              name="phone" 
              placeholder="Phone no" 
              pattern="[789][0-9]{9}" 
              required/>
            </div>
            <div className="input_field_textarea">
              <i className="fas fa-comment-alt"></i>
              <textarea 
              value={userContact.message}
              onChange={handleInput}
              name="message"
              placeholder='Message'></textarea>
            </div>
            <button type="submit" className="btn solid">SUBMIT</button>  
          </form>
          </div>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Contact Info</h3>
            
            <div className="contact-details">
                <div className="contact-icon">
                    <i className="fa fa-map-marker"></i> 
                </div>
                <p>Pet-e-care, Nashik</p>
            </div>

            <div className="contact-details">
              <div className="contact-icon">
                <i className="fa fa-phone-alt"></i> 
              </div>
              <p>8668835360</p>
            </div>

            <div className="contact-details">
              <div className="contact-icon">
                <i className="fa fa-envelope"></i> 
              </div>
              <p>petecare@gmail.com</p>
            </div>

          </div>
          <img src={contact_us} className="image" alt="" />
        </div>    
        </div>     
    </div>

  )
}