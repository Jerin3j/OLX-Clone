import React from 'react'

const Ads = () => {
  return (
    <div className='Ads hidden md:flex justify-center  mt-12 bg-[rgba(0,47,52,.03)]'>
      <div className=' flex flex-wrap justify-between '>
      <div className='AppImg -translate-x-4'>
        <img className='max-w-fit' src='https://statics.olx.in/external/base/img/phone-app.webp'/>
      </div>
      <div className='AppText flex flex-col justify-center ml-3 gap-y-9 text-theme-color'>
        <h1 className='uppercase font-extrabold text-4xl'>try the olx app</h1>
        <h1 className='text-xl w-8/12 '>Buy, sell and find just about anything using the app on your mobile</h1>
      </div>
      <div className='GrayLine w-0.5 bg-gray-400 h-44 '></div>

      <div className='GetApp flex flex-col ml-6 justify-center'>
        <h1 className='uppercase font-bold '>get your app today</h1>
        <div className='StoresPng w-28  flex gap-3 '>
        <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="App Store" />
        <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="Play Store" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Ads
