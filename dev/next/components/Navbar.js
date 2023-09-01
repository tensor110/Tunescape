"use client"
import React from 'react'
import "./Navbar.css"
import Link from 'next/link'
import { UserAuth } from '@/app/context/AuthContext'
const Navbar = () => {

  
  const { user,googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
      try {
          const res = await googleSignIn();
      } catch (e) {
          alert(e.message);
      }
  }
  const handleSignOut = async () => {
      try {
          await logOut();
          alert("SignedOut")

      } catch (e) {
          alert(e.message);
      }
  }

  console.log(user);


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
          <Link href="/stream" class="nav-item" style={{ "--i": 2 }}>Stream</Link>
          <Link href="/dashboard" class="nav-item" style={{ "--i": 0 }}>Dashboard</Link>
          <Link href="/about/us" class="nav-item" style={{ "--i": 1 }}>About us</Link>
          {user?(<Link onClick={handleSignOut} href="/" class="nav-item" style={{ "--i": 2 }}>Sign Out</Link>):(<Link onClick={handleSignIn} href="/" class="nav-item" style={{ "--i": 2 }}>Login</Link>)}
          

        </nav>
      </header>
      <br />
      <br />
      <br />
    </div >
  )
}

export default Navbar


