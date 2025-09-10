import React from 'react'

function Footer() {
  return (
    <div style={{textAlign: "center", padding: "1rem", backgroundColor: "coral", color: "white", marginTop: "1rem"}}>
       <p style={{fontSize: "1rem"}}>{new Date().getFullYear()} React+Vite Classes. All rights reserved.</p>
    </div>
  )
}

export default Footer