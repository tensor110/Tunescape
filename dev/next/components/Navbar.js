import React from 'react'
import "./Navbar.css"
import Link from 'next/link'
const Navbar = () => {
    return (
    <div>
    <header>
      <a href="/"><h1>Tunescape.</h1></a>

      <input type="checkbox" id="check" />
      <label for="check" class="icons">
        <i class="bx bx-menu" id="menu-icon"></i>
        <i class="bx bx-x" id="close-icon"></i>
      </label>

      <nav class="navbar">
        <Link href="/stream" class="nav-item" style={{"--i": 2}}>Stream</Link>
        <Link href="/dashboard" class="nav-item" style={{"--i": 0}}>Dashboard</Link>
        <Link href="/about/us" class="nav-item" style={{"--i": 1}}>About us</Link>
        <Link href="/stream" class="nav-item" style={{"--i": 2}}>Login</Link>
      </nav>
    </header>
    <br/>
      <br/>
      <br/>
</div >
  )
}

export default Navbar


