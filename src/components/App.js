import React from 'react';
import './App.css';
//import Forms from './Forms';
import TableData from './TableData';
//import ReadOnly from './ReadOnly';
// import Header from './Header';
import About from './About';
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';

function App() {

  return (
    <>
    <div className='app-container'>
      <NavBar />
    <Switch>
        <Route exact path="/about">
        <About />
        </Route>
        <Route >
        <TableData  />
        </Route>
      
      </Switch>
      
    </div>
    </>
  )
}

export default App;
