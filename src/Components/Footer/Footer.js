import React, { useState } from 'react'

const Footer = () => {
   

  

  return (
    <div className='Footer '>
        <div className='FooterEnd  z-40 w-full h-20 pt-4 flex justify-evenly gap-2 md:gap-44 bg-[#042F34] text-white'>
            <div className='flex flex-col gap-3 '>
                <h1 className='font-medium text-xs '>Other Countries</h1>
                <h6 className='text-sm font-extralight '>pakistan-south africa-Indonasia</h6>
            </div>
            <h6 className='text-sm font-extralight'>All rights reserved @2023 OLX</h6>
        </div>
    </div>
  )
}

export default Footer
