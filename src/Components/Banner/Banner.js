import './Banner.css'
import React from 'react'

const Banner = () => {
  return (
    <div className='Banner'>
      <div className=' mt-1 hidden md:block '>
        <div className='bannerImg flex items-center justify-around'>
        <div className='Button cursor-pointer bg-theme-color h-10 w-24 ml-40 flex items-center justify-center rounded'>
          <h1 className='text-white font-medium'>Sell Car</h1>
        </div>
        </div>
      </div>

      <div className='MobileView md:hidden p-4 mt-2 h-165px] w-full bg-[#3176fe]'>
         <img src='https://statics.olx.in//olxin/autos/landingPage/v1/light/value_proposition_cmc_v5_480.gif'/>
        <div className='ButtonArea flex mt-3 justify-evenly gap-7 '>
          <div className='Button h-10 w-6/12  flex justify-center items-center rounded bg-white cursor-pointer'>
            <h1 className='text-center font-semibold text-sm text-theme-color'>Buy Car</h1>
          </div>
          <div className='Button h-10 w-6/12 flex justify-center items-center rounded bg-white cursor-pointer'>
            <h1 className='text-center font-semibold text-sm text-theme-color'>Sell Car</h1>
          </div>
        </div>
      </div>
      <div className='MobileView md:hidden'>
          <div className=' flex justify-between mx-4 mt-8'>
            <h1 className=' text-theme-color'>Browse categories</h1>
            <h1 className='font-semibold text-sm underline decoration-2 underline-offset-2 hover:no-underline cursor-pointer text-theme-color'>See all</h1>
          </div>
          <ul className='Categories flex uppercase pt-3 overflow-scroll scroll whitespace-nowrap  justify-start '>
           <li className='flex flex-col mx-5 text-xs items-center mr-5'><img src='https://statics.olx.in/olxin/category_icons/v4/category_5_2x.png' className=' pb-2 w-14'/>OLXAuto (cars)</li>
           <li className='flex flex-col mx-5 text-xs items-center mr-5'><img src='https://statics.olx.in/olxin/category_icons/v4/category_3_2x.png' className='pb-2 w-14'/>properties</li>
           <li className='flex flex-col mx-5 text-xs items-center mr-5'><img src='https://statics.olx.in/olxin/category_icons/v4/category_1411_2x.png' className='pb-2 w-14 mt-1'/>mobiles</li>
           <li className='flex flex-col mx-5 text-xs items-center mr-7 scale-110'><img src='https://statics.olx.in/olxin/category_icons/v4/category_4_2x.png' className=' pb-2 scale-150 mt-5'/>jobs</li>
           <li className='flex flex-col mx-5 text-xs items-center mr-5 scale-110'><img src='https://statics.olx.in/olxin/category_icons/v4/category_2198_2x.png' className=' pb-2 scale-150 mt-5'/>bikes</li>
           <li className='flex flex-col mx-5 text-xs items-center mr-5'><img src='https://statics.olx.in/olxin/category_icons/v4/category_628_2x.png' className='pb-2 w-14'/>furniture</li>
          </ul>
        </div>
    </div>
  )
}

export default Banner
