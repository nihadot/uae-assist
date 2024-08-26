import React from 'react'
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-[#51AE36] justify-between w-full h-[43px] flex items-center px-4 md:px-[100px]'>
        <div className="">
            <label htmlFor="" className='text-[11px] font-poppins-500 font-medium text-white'>Copyright &#169; UAE ASSIST</label>
        </div>
        <div className="">
        <a className='no-underline text-black' target='_blank' href="https://www.instagram.com/offplanseller?igsh=YjEzbThlbzFlM2hv">
          <FaInstagram color='#fff' size={20} />
          </a>
        </div>
    </footer>
  )
}

export default Footer