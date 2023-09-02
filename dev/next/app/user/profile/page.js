"use client"
import { UserAuth } from '@/app/context/AuthContext';
import React, { useEffect, useState } from 'react'
import "./profile.css"

const page = () => {
  
  const [greet,setGreet] = useState("")
  
  let currTime = new Date().getHours();

  useEffect(()=>{
    if(currTime>=4 && currTime<12 ) setGreet("Morning")    
    else if (currTime>=12 && currTime<=4) setGreet("Afternoon")
    else setGreet("Evening")
  },[currTime])

  
  const { user} = UserAuth();
  return (

    <div className='main__box'>
      <h1 className='greet'>Good {greet},</h1>
      <h1 className='userName'>{user?.displayName}</h1>
    </div>
  )
}

export default page
