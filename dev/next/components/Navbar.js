"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import { UserAuth } from "@/app/context/AuthContext";
const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      const res = await googleSignIn();
    } catch (e) {
      alert(e.message);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (e) {
      alert(e.message);
    }
  };

  console.log(user);

  return (
    <div id="container">
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <a href="/" class="logo"><h1>Tunescape.</h1></a>
        <ul class="links">
          <li><a href="/stream">Stream</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          {user ? (
        <>
          <li><a href="/user/profile">{user?.displayName}</a></li>
          <li><a href="/" onClick={handleSignOut}>Sign Out</a></li>
        </>
          ):(
            <li><a href="/" onClick={handleSignIn}>Login</a></li>
          )
          }
          </ul>
        <label for="nav-toggle" class="icon-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
