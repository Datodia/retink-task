import React from 'react'
import './auth.css'

export const Auth = () => {
  const handlechange = (e) => {
    console.log(e.target.value)
  }


  return (
    <div className='wrapper'>
      <h1>Sign Up For The BETA!</h1>
      <div className='auth'>
        <input onChange={handlechange} type='text' placeholder='Business Name' />
        <p>would like a beta invite sent to </p>
        <input onChange={handlechange} type='email' placeholder='@email address' />
        <p>would like a beta invite sent to </p>
      </div>
      <div className='buttons'>
        <button className='sing'>Notify Me</button>
        <button className='partner'>Sing up as a freelace partner</button>
      </div>
    </div>
  )
}
