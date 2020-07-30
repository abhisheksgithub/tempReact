import React, { useState } from 'react'

const ViweData = ({ name, setName })  => {
  const [userInput, setUserInput] = useState({name :'', email: ''})
  function onInputChange(e, tag) {
    if(tag == 'fname') {
      setUserInput({...userInput, name: e.target.value})
    }
    else {
      setUserInput({...userInput, email: e.target.value})
    }
  }
  function onButtonClick() {
    setName([...name, userInput])
    setUserInput({name :'', email: ''})
  }
  return (
    <>
    <label>Name</label> <br />
      <input value={userInput.name} name="fname" onChange={(e) => onInputChange(e, 'fname')} /> <br />
      <label>Email</label> <br />
      <input value={userInput.email} name="email" onChange={(e) => onInputChange(e, 'email')} /> <br />
      <button onClick={onButtonClick}>Add</button>
    </>
  )
}
export default  ViweData