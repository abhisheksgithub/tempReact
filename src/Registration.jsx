import React from 'react'
import ViewData from './ViewData';

const Registration = ({ title, name, setName }) => {
    return (
      <>
        <h3>{title}</h3>
        <ViewData name={name} setName={setName}/>
      </>
    )
  }
  export default Registration

 