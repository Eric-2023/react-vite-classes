import React from 'react'

function Form({ firstName, lastName }) {
  return (
    <div>
        <h2>Form Component</h2>
        <form>
            <div className="row">
            <div className="col">
                <input type="text" className="form-control" placeholder="First name" value={firstName}/>
            </div>
            <div className="col">
                <input type="text" className="form-control" placeholder="Last name" value={lastName}/>
            </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form