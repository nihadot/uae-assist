import React from 'react'
import {Link} from "react-router-dom";

function NotFoundPage() {
  return (
    <div className='font-sf-500 font-medium custom-gradient flex-col flex items-center justify-center text-white w-full h-screen'>
      <div className="flex gap-3 items-center justify-center">

        <label htmlFor="" className='text-[60px]'>404</label>
        <label htmlFor="" className='text-[20px]'>not found!</label>
      </div>
        <Link to={'/'}  className='text-sm underline'>Go to home</Link>
    </div>
  )
}

export default NotFoundPage