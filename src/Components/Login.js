import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg'alt='logo'/>
        </div>
        <form className='p-12 w-3/12 bg-black bg-opacity-85 absolute my-36 text-white mx-auto right-0 left-0 rounded-md'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-3 bg-gray-700 rounded-md my-4 w-full'/>}
            <input type='text' placeholder='Email Address' className='p-3 bg-gray-700 rounded-md my-4 w-full'/>
            <input type='password' placeholder='Password' className='p-3 bg-gray-700 my-4 w-full rounded-md'/>
            <button className='p-2 w-full my-4 bg-red-600 hover:bg-red-700 rounded-md'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='text-gray-400'>{isSignInForm?"New to Netflix? ":"Already Registered? "}<span onClick={toggleSignInForm} className='text-white hover:underline cursor-pointer'>{isSignInForm?"Sign Up Now.":"Sign In Now."}</span> </p>
        </form>
    </div>
  )
}

export default Login