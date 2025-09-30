import React from 'react'

function Form({ firstName, lastName, email, password, onFirstNameChange, onLastNameChange, onEmailChange, onPasswordChange, onSubmit }) {
  return (
    // we need now to attach onchange event to each input field, and use the setter functions to update the state variables
    // the onchange eveent is the one that listens to the input changes
    <div>
        <h2>Form Component</h2>
        <form onSubmit={onSubmit}>
            <div className="row">
            <div className="col">
                <input type="text" className="form-control" placeholder="First name" value={firstName} onChange={onFirstNameChange}/>
            </div>
            <div className="col">
                <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={onLastNameChange}/>
            </div>
            </div>
            <div className="row mt-2">
            <div className="col">
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={onEmailChange}/>
            </div>
            <div className="col">
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={onPasswordChange}/>
            </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form