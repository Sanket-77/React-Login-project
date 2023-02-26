import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


export default function Home() {

  const naviate = useNavigate();
  useEffect(() => {
    tokenCheck();
  })

  const tokenCheck = () => {
    if (!localStorage.getItem('token')) {
      naviate('/login')
    }
  }
  return (
    <>
      <div className='background'>
        <h1>Home</h1>
        <button className='logout' onClick={() => {
          localStorage.removeItem('token')
          tokenCheck()
        }}
        >LogOut</button>
      </div>
    </>
  )
}

