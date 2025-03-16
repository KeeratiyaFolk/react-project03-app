import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div>
        <h4>
            <Link to="/login" style={{textDecoration:"none",color:"skyblue"}}>Login</Link> |
            <Link to="/home" style={{textDecoration:"none",color: "purple"}}>Home</Link> |
            <Link to="/about" style={{textDecoration:"none", color: "pink"}}>About</Link> |
            <Link to="/wow/contact" style={{textDecoration:"none", color: "green"}}>Contact</Link> |
            <Link to="/sau/dti/regis/register" style={{textDecoration:"none", color: "orange"}}>Register</Link> |
        </h4>
        <h2 style={{textAlign:"center",color:"red", margin:"10px 0px"}}>
            Welcome to DTI-SAU
        </h2>

    </div>

    </>
  )
}

export default NavBar