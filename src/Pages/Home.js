import React from 'react'
import Ads from '../Components/Ads/Ads'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import FooterList from '../Components/Footer/FooterList'
import Header from '../Components/Header/Header'
import Products from '../Components/Products/Products'

const Home = (props) => {
  return (
    <div className='HomeParentDiv'>
      <Header/>
        <Banner/>
        <Products/>
        <Ads/>
        <FooterList/>
      <Footer/>
    </div>
  )
}

export default Home
