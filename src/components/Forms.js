import React, { useState } from 'react'

function Forms() {
    const[name, setName] = useState("")
    const[address, setAddress] = useState("")
    const[number, setNumber] = useState('')
    const [email, setEmail] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log("addsomething")
    }
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
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        
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