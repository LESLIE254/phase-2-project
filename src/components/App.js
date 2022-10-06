import React from 'react';
import './App.css';
//import Forms from './Forms';
import TableData from './TableData';
//import Search from './Search';
import About from './About';
import {Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';
import Footer from './Footer';

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
      <Footer />
    </div>
    </>
  )
}

export default App;
