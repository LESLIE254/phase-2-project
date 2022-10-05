///import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, {useState, useEffect} from 'react'
import Forms from './Forms'
import ReadOnly from "./ReadOnly"

function TableData() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/contacts")
        .then(resp => resp.json())
        .then(data => setContacts(data))
      }, [])
      const handleAddData = (data) => {
        console.log('new data',data)
      }

  return (
    <div>
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
               <ReadOnly key={contact.id} contact={contact} />
            )
          })}
         
        </tbody>
      </table>
      <div>
      <h2>Add Contact</h2>
      <Forms addContact ={handleAddData}/>
      </div>
    </div>
  )
}

export default TableData