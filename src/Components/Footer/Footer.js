import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   
  return (
    <div className='Footer'>
        <div className='FooterEnd  z-40 w-full md:h-20 pt-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-x-72 bg-[#042F34] text-white'>
            <div className='flex flex-col gap-3 items-center md:items-start'>
                <h1 className='font-medium text-xs '>Other Countries</h1>
                <h1 className='text-sm font-extralight '>pakistan-south africa-Indonasia</h1>
            </div>
            <div className='flex gap-1 mt-5 md:mt-10'>
            <h1 className='text-xs'>made by</h1>
            <Link to={'https://github.com/Jerin3j/'}>
            <h1 className='text-xs hover:text-blue-400 cursor-pointer'>Jerin 3J</h1>
            </Link>
            </div>
            <h6 className='text-sm font-extralight'>All rights reserved @2023 OLX</h6>
        </div>
    </div>
  )
}

export default Footer
