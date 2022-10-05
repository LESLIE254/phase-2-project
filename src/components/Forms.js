import React, { useState } from 'react'
//import {useHistory} from "react-router-dom"

function Forms({addContact}) {
    const[name, setName] = useState("")
    const[address, setAddress] = useState("")
    const[phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            email: email
            
        }
        //console.log("addsomething", formData)
        addContact(formData)
      
       

    }
    console.log({addContact});
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name='name'
        required= "required"
        placeholder='Enter a name...'
        value={name}
        onChange={(e) => setName(e.target.value)}
        
        />
        <input 
        type="text"
        name='address'
        required= "required"
        placeholder='Enter an address...'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
       
        />
        <input 
        type="text"
        name='number'
        required= "required"
        placeholder='Enter a number...'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        
        />
         <input 
        type="text"
        name='email'
        required= "required"
        placeholder='Enter an email...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        />
       <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Forms