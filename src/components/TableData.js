import React, {useState, useEffect} from 'react'
import Forms from './Forms'
import ReadOnly from "./ReadOnly"
import {Route, Switch, useHistory} from 'react-router-dom'

function TableData() {
  const history = useHistory()

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/contacts")
        .then(resp => resp.json())
        .then(data => setContacts(data))
      }, [])

      const handleAddData = (data) => {
        
        fetch("http://localhost:4000/contacts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then((newContact) =>{setContacts([...contacts, newContact])
          history.push("/")
        })
      }

      const handleDeleteContact = (id) => {
        fetch(`http://localhost:4000/contacts/${id}`, {
          method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(() => {
            const remainingContacts = contacts.filter((contact) => contact.id !== id)
            setContacts(remainingContacts)
        })
        //console.log('delete', id);
      }

  return (
    
    <div>
      <div>
    <h2>Contact List</h2>
    </div>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          </thead>
      
        <tbody>
          {contacts.map((contact) => {
            return(
              <Switch>
                <Route exact path="/">
               <ReadOnly key={contact.id} contact={contact} deleteContact={handleDeleteContact} />
               </Route>
               </Switch>
            )
          })}
         
        </tbody>
      </table>
     
      <div>
      
      
      <Switch>
      <Route path="/add">
      <h2>Add Contact</h2>
      <Forms addContact ={handleAddData}/>
      </Route>
      </Switch>
      </div>
    </div>
  )
}

export default TableData