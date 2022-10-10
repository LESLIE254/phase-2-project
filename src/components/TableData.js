import React, {useState, useEffect} from 'react'
import Forms from './Forms'
import ReadOnly from "./ReadOnly"
import {Route, Switch, useHistory} from 'react-router-dom'
import Search from './Search'


function TableData() {
  const history = useHistory()

    const [contacts, setContacts] = useState([])
    //const [searchFilter, setSearchFilter] = useState("")

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/contacts`)
        .then(resp => resp.json())
        .then(data => setContacts(data))
      }, [])

      const handleAddData = (data) => {
        
        fetch(`${process.env.REACT_APP_API_URL}/contacts`, {
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
        fetch(`${process.env.REACT_APP_API_URL}${id}/contacts`, {
          method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(() => {
            const remainingContacts = contacts.filter((contact) => contact.id !== id)
            setContacts(remainingContacts)
        })
      
      }
      
         function handleOnSearching(search) {
          setContacts(contacts => contacts.filter((contact) =>contact.name.includes(search)))
          
        }
    
  return (
    
    <div>
     
      <Search onSearching={handleOnSearching}/>
  
      <div>
    <h2>Contact List</h2>
    </div>
    <form>
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
      </form>
     
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