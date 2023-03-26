import React from 'react'
import HeartIcon from '../../Assets/HeartIcon'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Favorite = () => {
    window.title ="dd"
  return (
    <div className='Favorites flex flex-col'>
        <Header/>
      <div className='FavoriteProduct h- w-[900px] flex self-center gap-24 px-8  border-2 border-gray-300 rounded my-20 py-10'>
        <div className='productImg'>
            <img className='h-32 w-44'/>
        </div>
        <div className='ProductDetails text-theme-color flex flex-col justify-evenly'>
            <h1 className='text-3xl font-medium'>Product Name</h1>
            <h1 className='text-xl font-extralight'>Product Description</h1>
            <h1 className='text-lg font-thin'>Product Location</h1>
        </div>
        <span onClick={()=>alert("removed from fav")} className='ml-60 -mt-5 fill-red-400 cursor-pointer'>
            <HeartIcon/>
        </span>

      </div>
      <Footer/>
    </div>
  )
}

export default Favorite
