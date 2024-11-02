import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <h1>welcome to nginx</h1>
     <nav>
      <Link to={'/'}><p style={{cursor:'pointer'}}>Home</p></Link>
     <Link to={'/about'}> <p style={{cursor:'pointer'}}>About</p></Link>
      <Link to={'/login'}><p style={{cursor:'pointer'}}>Login</p></Link>
      <Link to={'/signup'}><p style={{cursor:'pointer'}}>Signup</p></Link>
     </nav>
    </>
  )
}

export default Nav