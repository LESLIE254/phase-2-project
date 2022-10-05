import React from 'react';
import './App.css';
//import Forms from './Forms';
import TableData from './TableData';
//import ReadOnly from './ReadOnly';
// import Header from './Header';

function App() {

  
  // const[addFormData, setAddFormData] = useState({
  //   name: "",
  //   address: "",
  //   phoneNumber: "",
  //   email: ""
  // })

  // function handleFormChange(e) {
  //   e.preventDefault();
  //   const fieldName = e.target.getAttribute("name")
  //   const fieldValue = e.target.value;
  //   const newFormData = {...addFormData}
  //   newFormData[fieldValue] = fieldName
  //   setAddFormData(newFormData)

  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const newContact = {
  //     id: nanoid(),
  //     name: addFormData.name,
  //     address: addFormData.address,
  //     phoneNumber: addFormData.phoneNumber,
  //     email: addFormData.email
  //   }
  //   const newContacts = [...contacts, newContact]
  //   setContacts(newContacts)
  // }

  
  // useEffect(() => {
  //   fetch("http://localhost:4000/contacts", {
  //     method: 'POST',
  //     headers:{
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify()
  //   })
  //   .then(resp => resp.json())
    
  // }, [])
  return (
    <div className='app-container'>
      <TableData />
      <h2>Add Contact</h2>
    </div>
  )
}

export default App;
