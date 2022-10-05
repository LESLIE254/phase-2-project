import React from 'react'
import './App.css'

function ReadOnly({contact}) {
  return (
    <div>
        <tr>
            <td>{contact.name}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
        </tr>
    </div>
  )
}

export default ReadOnly