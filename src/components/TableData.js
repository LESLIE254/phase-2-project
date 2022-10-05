///import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, {useState, useEffect} from 'react'
import

function TableData() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/contacts")
        .then(resp => resp.json())
        .then(data => setContacts(data))
      }, [])

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
                <>
              <tr>
              <td>{contact.name}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
          </tr>
          </>
            )
          })}
          <Forms />
         
        </tbody>
      </table>
    </div>
  )
}

export default TableData