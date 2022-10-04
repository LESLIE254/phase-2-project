import React from 'react';
import './App.css';
// import Header from './Header';

function App() {

  
  return (
    <div className='app-container'>
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
          <tr>
            <td>Bob Kline</td>
            <td>P.O.Box 12123,Nairobi</td>
            <td>072127373</td>
            <td>bobkline@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;
