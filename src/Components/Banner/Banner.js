import './Banner.css'

import React from 'react'

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='max-32 mt-1 hidden md:block'>
        <img src='https://statics.olx.in/olxin/banners/hero_bg_in_v4@1x.png'/>
      </div>
      <div className='MobileView md:hidden p-4 mt-2 h-165px] w-full bg-[#3176fe]'>
          <img src='https://statics.olx.in//olxin/autos/landingPage/v1/light/value_proposition_cmc_v5_480.gif'/>
        <div className='flex mt-3 justify-evenly gap-7 '>
          <div className=' h-10 w-6/12  flex justify-center items-center rounded bg-white cursor-pointer'>
               <h1 className='text-center font-semibold text-sm text-theme-color'>Buy Car</h1>
          </div>
          <div className='h-10 w-6/12 flex justify-center items-center rounded bg-white cursor-pointer'>
               <h1 className='text-center font-semibold text-sm text-theme-color'>Sell Car</h1>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
