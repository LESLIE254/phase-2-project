import React from 'react'

function ReadOnly({contact,deleteContact}) {

  
  return (
    <>
    
              <tr>
              <td>{contact.name}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email} </td>
              <td>
                <button onClick= {() => deleteContact(contact.id)} type="buton">Delete
              </button></td>
          </tr>
    </>
  )
}

export default ReadOnly