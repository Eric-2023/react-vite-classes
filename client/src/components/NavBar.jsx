import React from 'react'
import '../styles/NavBar.css'


function NavBar() { 
return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ color: '#ffffff', fontWeight: 'bold' }}>Navbar</a>
            <button className="navbar-toggler" type="button" style={{ borderColor: '#ffffff' }}>
                <span className="navbar-toggler-icon" style={{ backgroundColor: '#ffffff' }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#" style={{ color: '#ffffff', marginRight: '15px' }}>Home</a>
                    <a className="nav-link" href="#" style={{ color: '#ffffff', marginRight: '15px' }}>Features</a>
                    <a className="nav-link" href="#" style={{ color: '#ffffff', marginRight: '15px' }}>Pricing</a>
                    <a className="nav-link disabled" aria-disabled="true" style={{ color: '#6c757d' }}>Disabled</a>
                </div>
            </div>
        </div>
    </nav>
)
}

export default NavBar