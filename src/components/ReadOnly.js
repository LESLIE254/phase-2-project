import React from 'react'

function ReadOnly({contact}) {
  return (
    <>
              <tr>
              <td>{contact.name}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
          </tr>
    </>
  )
}

export default ReadOnly