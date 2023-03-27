import './App.css';
import {useState} from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate} from 'react-router-dom';


function Form() {
 
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3nhjqdx', 
    'template_jkxuqsk', form.current,
     'ICYkq2iHb62ra7Lqp')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      }).then(()=>{
        navigate("/redirect");
      })
      
    
  };



 const [name, setName] = useState('');
 const [age, setAge] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [city, setCity] = useState('');

  return (
    <div class="container">
      <form ref={form} onSubmit={sendEmail}>
        <h3>User INFO</h3>
        <input type="text" id="name" name="user_name" placeholder="your name" onChange={(e) => setName(e.target.value)} required></input>
        <input type="email" id="email" name="user_email" placeholder="Email id" value={email} onChange={(e) => setEmail(e.target.value)} required ></input>
        <input type="text" id="phone" name="user_phone" placeholder="Phone no" onChange={(e) => setPhone(e.target.value)} required></input>
        <input type="number" id="age" name="user_age" placeholder="Age" onChange={(e) => setAge(e.target.value)} required></input>
        <input type="text" id="city" name="user_city" placeholder="City" onChange={(e) => setCity(e.target.value)} required></input>
        
          <button type="submit">Submit</button>

        
      </form>
      
    </div>
  );
}

export default Form;
