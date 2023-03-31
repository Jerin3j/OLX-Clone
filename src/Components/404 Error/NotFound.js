import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

const NotFound = () => {
  return (
    <div className='notFound '>
      <Header/>
      <div className='Container flex flex-col md:flex-row mt-8 absolute top-1/2 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2'>
      <div className='Image flex justify-center'>
          <img src='https://statics.olx.in/external/base/img/404.webp'/>
        </div>
        
        <div className='Text text-theme-color flex flex-col gap-1 ml-3 items-center'>
          <h1 className='font-bold text-8xl'>Oops!</h1>
          <h1 className='text-xl md:text-3xl'>We can't seem to find that. Try searching for it.</h1>
          <h1 className='text-sm text-gray-400'>Error 404</h1>
          <div className='textLinks flex gap-5'>
            <h1 className=''>Here are some helpful links:</h1>
            <Link to={'/'}>
            <h1 className='hover:underline cursor-pointer underline-offset-2'> Home</h1>
            </Link>
            <Link to={'https://github.com/Jerin3j/'}>
              <h1 className='hover:underline cursor-pointer underline-offset-2'>Help</h1>
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
