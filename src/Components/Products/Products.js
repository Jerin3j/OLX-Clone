import React from 'react'
import HeartIcon from '../../Assets/HeartIcon'
import './Products.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Products = () => {
  return (
    <div className='Products'>
      <div className='flex flex-col mt-16 md:mt-32 relative'>
<h1 className=' self- place-self-center flex -ml-40 sm:-ml-[430px] md:-ml-[950px] text-sm md:text-2xl'>Fresh recommendations</h1>
        <ul className='Allproducts pt-4 ml-4 sm:ml-0 flex  flex-wrap items-center content-start justify-center'>

            <li className='productBox mr-3.5 mb-3 md:w-72 md:h-[263px] w-5/12  border border-slate-300 rounded relative '>
              <div className='ItemPicture flex justify-center h-36'>
               <img className=' md:left-10  min-h-full max-h-full max-w-full ' src='https://apollo-singapore.akamaized.net/v1/files/4og1a1ccffpm3-IN/image;s=300x600;q=60' alt='Product_Image'/>
                </div>
                  <div className='ItemText flex flex-col justify-between'>
                    <label>
                   <span className='absolute top-4 z-10 px-1 py-0.5 h-5 text-[10px] md:text-xs font-bold md:font-medium uppercase bg-yellow-400'>featured</span>
                   </label>
                   
                    {<span className='text-2xl mt-3 text-theme-color font-semibold'><Skeleton/></span>  }
                    <span className='truncate mt-2 text-sm text-gray-500 font-normal'>Brand new apple mobiles on Rent and Emi 14 pro, 14 pro max and etc</span>
                    <div className='mt-4 uppercase text-gray-600 flex justify-between'>
                    <span className='truncate text-[10px]'>Bangalore Airport Area, Bengaluru</span>
                    <span className='hidden md:block text-[10px]'>Today</span>
                    </div>
                    <span className='absolute right-0 md:right-1 top-4 cursor-pointer fill-current focus:fill-red-500 '>
                    <HeartIcon/>
                  </span>
                  </div>
              </li>
              <li className='productBox mr-3.5 mb-3 md:w-72 md:h-[263px] w-5/12  border border-slate-300 rounded relative '>
              <div className='ItemPicture flex justify-center h-36'>
                  <img className=' md:left-10  min-h-full max-h-full max-w-full ' src='https://apollo-singapore.akamaized.net/v1/files/4og1a1ccffpm3-IN/image;s=300x600;q=60' alt='Product_Image'/>
                  </div>
                  <div className='ItemText flex flex-col justify-between'>
                    <label>
                   <span className='absolute top-4 z-10 px-1 py-0.5 h-5 text-[10px] md:text-xs font-bold md:font-medium uppercase bg-yellow-400'>featured</span>
                   </label>
                    <span className='text-2xl mt-3 text-theme-color font-semibold'>₹ 13,500</span>
                    <span className='truncate mt-2 text-sm text-gray-500 font-normal'>Brand new apple mobiles on Rent and Emi 14 pro, 14 pro max and etc</span>
                    <div className='mt-4 uppercase text-gray-600 flex justify-between'>
                    <span className='truncate text-[10px]'>Bangalore Airport Area, Bengaluru</span>
                    <span className='hidden md:block text-[10px]'>Today</span>
                    </div>
                    <span className='absolute right-0 md:right-1 top-4 cursor-pointer fill-current active:fill-red-500 '>
                    <HeartIcon/>
                  </span>
                  </div>
              </li>
              <li className='productBox mr-3.5 mb-3 md:w-72 md:h-[263px] w-5/12  border border-slate-300 rounded relative '>
              <div className='ItemPicture flex justify-center h-36'>
                  <img className=' md:left-10  min-h-full max-h-full max-w-full ' src='https://apollo-singapore.akamaized.net/v1/files/4og1a1ccffpm3-IN/image;s=300x600;q=60' alt='Product_Image'/>
                  </div>
                  <div className='ItemText flex flex-col justify-between'>
                    <label>
                   <span className='absolute top-4 z-10 px-1 py-0.5 h-5 text-[10px] md:text-xs font-bold md:font-medium uppercase bg-yellow-400'>featured</span>
                   </label>
                    <span className='text-2xl mt-3 text-theme-color font-semibold'>₹ 13,500</span>
                    <span className='truncate mt-2 text-sm text-gray-500 font-normal'>Brand new apple mobiles on Rent and Emi 14 pro, 14 pro max and etc</span>
                    <div className='mt-4 uppercase text-gray-600 flex justify-between'>
                    <span className='truncate text-[10px]'>Bangalore Airport Area, Bengaluru</span>
                    <span className='hidden md:block text-[10px]'>Today</span>
                    </div>
                    <span className='absolute right-0 md:right-1 top-4 cursor-pointer fill-current focus:fill-red-500 '>
                    <HeartIcon/>
                  </span>
                  </div>
              </li>
              <li className='productBox mr-3.5 mb-3 md:w-72 md:h-[263px] w-5/12  border border-slate-300 rounded relative '>
              <div className='ItemPicture flex justify-center h-36'>
                  <img className=' md:left-10  min-h-full max-h-full max-w-full ' src='https://apollo-singapore.akamaized.net/v1/files/4og1a1ccffpm3-IN/image;s=300x600;q=60' alt='Product_Image'/>
                  </div>
                  <div className='ItemText flex flex-col justify-between'>
                    <label>
                   <span className='absolute top-4 z-10 px-1 py-0.5 h-5 text-[10px] md:text-xs font-bold md:font-medium uppercase bg-yellow-400'>featured</span>
                   </label>
                    <span className='text-2xl mt-3 text-theme-color font-semibold'>₹ 13,500</span>
                    <span className='truncate mt-2 text-sm text-gray-500 font-normal'>Brand new apple mobiles on Rent and Emi 14 pro, 14 pro max and etc</span>
                    <div className='mt-4 uppercase text-gray-600 flex justify-between'>
                    <span className='truncate text-[10px]'>Bangalore Airport Area, Bengaluru</span>
                    <span className='hidden md:block text-[10px]'>Today</span>
                    </div>
                    <span className='absolute right-0 md:right-1 top-4 cursor-pointer fill-current focus:fill-red-500 '>
                    <HeartIcon/>
                  </span>
                  </div>
              </li>
            </ul>
           <div className='self-center -translate-x-2/4 Button cursor-pointer border-2 hover:border-4 border-theme-color h-10 w-28 ml-40 flex items-center justify-center rounded'>
          <h1 className='text-theme-color font-medium'>Load More</h1>
        </div>
        </div>
       
      </div>
  )
}

export default Products