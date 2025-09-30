import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Items from './components/Items'
import Footer from './components/Footer'
import Form from './components/Form'



function App() {
//define state variables for form inputs; define state for first name and last name and store  them in variables.
const[firstName, setFirstName]= useState(''); //setFirstName is the setter function  a function that updates the state variable firstName
const[lastName, setLastName]= useState('');
const [email, setEmail]= useState('');
const [password, setPassword]= useState('');

function handleFirstName (e) {
  setFirstName(e.target.value);
}
function handleLastName (e) {
  setLastName(e.target.value);
}
function handleEmail (e) {
  setEmail(e.target.value);
}
function handlePassword (e) {
  setPassword(e.target.value);
}
function handleSubmit (e) {
  e.preventDefault(); //prevent the default form submission behavior
  console.log(firstName, lastName, email, password);
  alert(`Form submitted with data:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}`);
}
  return (
   <>
    <NavBar />
    <Items />
    {/* Pass state variables as props to Form component */}
    <Form 
    firstName={firstName}
    lastName={lastName}
    email={email}
    password={password}
    onFirstNameChange={handleFirstName}
    onLastNameChange={handleLastName}
    onEmailChange={handleEmail}
    onPasswordChange={handlePassword}
    onSubmit={handleSubmit}
    />
    <Footer />
   </>
  )
}

export default App
