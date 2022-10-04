import React, {useEffect, useState} from 'react';
import './App.css';
// import Header from './Header';

function App() {

  const [contacts, setContacts] = useState([])
  const[addFormData, setAddFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: ""
  })

  function handleFormChange(e) {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name")
    const fieldValue = e.target.value;
    const newFormData = {...addFormData}
    newFormData[fieldValue] = fieldName

  }

  useEffect(() => {
    fetch("http://localhost:4000/contacts")
    .then(resp => resp.json())
    .then(data => setContacts(data))
  }, [])
  return (
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return(
             <tr>
             <td>{contact.name}</td>
             <td>{contact.address}</td>
             <td>{contact.phoneNumber}</td>
             <td>{contact.email}</td>
           </tr>
            )
          })}
         
        </tbody>
      </table>
      <h2>Add Contact</h2>
      <form>
        <input 
        type="text"
        name='name'
        required= "required"
        placeholder='Enter a name...'
        />
        <input 
        type="text"
        name='address'
        required= "required"
        placeholder='Enter an address...'
        />
        <input 
        type="text"
        name='number'
        required= "required"
        placeholder='Enter a number...'
        />
         <input 
        type="text"
        name='email'
        required= "required"
        placeholder='Enter an email...'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default App;
