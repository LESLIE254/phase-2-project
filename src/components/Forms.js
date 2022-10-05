import React, { useState } from 'react'

function Forms() {
    const[name, setName] = useState("")
    const[address, setAddress] = useState("")
    const[number, setNumber] = useState('')
    const [email, setEmail] = useState("")
  return (
    <div>
        <form >
        <input 
        type="text"
        name='name'
        required= "required"
        placeholder='Enter a name...'
        value={name}
        
        />
        <input 
        type="text"
        name='address'
        required= "required"
        placeholder='Enter an address...'
        value={address}
       
        />
        <input 
        type="text"
        name='number'
        required= "required"
        placeholder='Enter a number...'
        value={number}
        
        />
         <input 
        type="text"
        name='email'
        required= "required"
        placeholder='Enter an email...'
        value={email}
        
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Forms