import React from 'react'
import {Link} from "react-router-dom"

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold'>Signup</h1>
    <form className='flex flex-col gap-4'>
      <input type='text' placeholder='username'id='username' className='bg-slate-100 p-3 rounded-lg'/>
      <input type='email' placeholder='email'id='email' className='bg-slate-100 p-3'/>
      <input  type='password' placeholder='password'id='password' className='bg-slate-100 p-3'/>
      <button className='bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button> 
    </form>
    <div className = 'flex gap-2 mt-5'>
      <p>Have An Account?</p>
      <Link to="/sign-in"><span className='text-blue-500'>Sign In</span></Link>
    </div>
      
      </div>
  )
};
