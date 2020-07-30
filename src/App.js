import React, {useState} from 'react';
import './App.css';
import Registration from './Registration'
 import UserManagement from './UserManagement';
function App() {
  const [name, setName] = useState([])
  console.log(name, 'name')
  return (
    <>
      <UserManagement />
      <Registration title="Form Registartion" 
      name={name} setName={setName} 

      />
      {name.map((a, index) => <div key={index}>
            <p>Name :{a.name} <br /> Email :{a.email} </p>
        </div>)}
      
    </>
  )
}

export default App;
