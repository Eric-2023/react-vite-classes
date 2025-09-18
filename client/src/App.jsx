import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Items from './components/Items'
import Footer from './components/Footer'
import Form from './components/Form'
import StateManagementDemo from './components/State'


function App() {
//define state variables for form inputs; define state for first name and last name and store  them in variables.
const[firstName, setFirstName]= useState(''); //setFirstName is the setter function  a function that updates the state variable firstName
const[lastName, setLastName]= useState('');
  return (
   <>
    <NavBar />
    <Items />
    {/* Pass state variables as props to Form component */}
    <Form 
    firstName={firstName}
    lastName={lastName}
    />
    <StateManagementDemo />
    <Footer />
   </>
  )
}

export default App
