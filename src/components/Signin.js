import React from 'react'
import front from "../images/front.jpeg"
import logo from "../images/logo.png"

function Signin() {
  return (
    <div className='grid grid-cols-2 bg-black h-screen'>
        <div className='text-center'>
        <img src={logo} className='h-14 ml- mt-32'/>
         <h1 className='text-white text-3xl font-semibold'>Sign in</h1>
         <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-14 w-96">
          Button
          </button>
          <h2 className='text-blue-500 underline'>Sign in now</h2>
        </div>
        <div>
            <img src={front} className='h-screen'/>
        </div>
      
    </div>
  )
}

export default Signin;
