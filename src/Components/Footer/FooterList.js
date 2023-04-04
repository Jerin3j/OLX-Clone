import React, { useState } from 'react'
import ArrowBtn from '../../Assets/ArrowBtn';
import { FaFacebookF, FaTwitter, FaInstagram, FaPlayCircle } from "react-icons/fa";

const FooterList = () => {
    const [click, setClick]= useState(false)
   const [click1, setClick1]= useState(false)
   const [click2, setClick2]= useState(false)
   const [click3, setClick3]= useState(false)

   var Lists = [
        {id:1, name:[ "Kolkata", "Mumbai", "Chennai", "Kerala"]},
        {id:2, name:[ "Bhubaneshwar", "Hyderabad", "Chandigarh", "Nashik"]},
        {id:3, name:[ "About OLX Group", "Careers", "Contact us", "OLXPeople"]},
        {id:4, name:[ "Help", "Legal & Privacy information", "Blog", "OLX Autos Sell Car"]}
      ]
  return (
    <div className='FooterList'>
      <div className='Footer'>
        <div className=' Sections flex flex-col md:flex-row justify-center pt-4 mt-8 md:mt-0 w-full flex-wrap gap-12 item-center bg-[#ebeeef] px-2 md:px-5'>
            <section className='S1 hidden md:block'>
                <h1 className='font-medium flex ml-2 text-theme-color'>POPULAR LOCATIONS </h1>
                    <ul className='text-sm font-extralight flex flex-col pt-4'> 
                  
                    {Lists.map((list)=>{  
                     if (list.id===1) {
                      return(
                    list.name.map((li)=>(
                      <li className='text-[13px] font-[400] text-gray-600 hover:text-theme-color cursor-pointer -mt-5 '>{li}</li>
                     ))) }})}

                    </ul>
            </section>
            <section className='S2 hidden md:block'>
                <h1 className='font-medium flex ml-2 text-theme-color'>TRENDING LOCATIONS </h1>
                <ul className='text-sm font-extralight flex flex-col  pt-4'>

                {Lists.map((list)=>{  
                     if (list.id===2) {
                      return(
                    list.name.map((li)=>(
                      <li className='text-[13px] font-[400] text-gray-600 hover:text-theme-color cursor-pointer -mt-5 '>{li}</li>
                     ))) }})}

                     </ul>
                </section>
            <section className='S3 hidden md:block'>
                <h1 className='font-medium flex ml-2 text-theme-color'>ABOUT US </h1>
                <ul className='text-sm font-extralight flex flex-col  pt-4'>
                
                {Lists.map((list)=>{  
                     if (list.id===3) {
                      return(
                    list.name.map((li)=>(
                      <li className='text-[13px] font-[400] text-gray-600 hover:text-theme-color cursor-pointer -mt-5 '>{li}</li>
                     ))) }})}

                     </ul> 
                </section>
            <section className='S4 hidden md:block'>
                <h1 className='font-medium flex ml-2 text-theme-color'>OLX</h1>
                <ul className='text-sm font-extralight flex flex-col  pt-4'>
                   
                {Lists.map((list)=>{  
                     if (list.id===4) {
                      return(
                    list.name.map((li)=>(
                      <li className='text-[13px] font-[400] text-gray-600 hover:text-theme-color cursor-pointer -mt-5 '>{li}</li>
                     ))) }})}

                </ul>
                </section>
            <section className='S4 hidden md:flex flex-col '>
                <h1 className='font-medium ml-2 text-theme-color'>FOLLOW US</h1>
                <ul className='flex text-gray-600'>
                    <li><FaFacebookF/></li>
                    <li><FaInstagram/></li>
                    <li><FaTwitter/></li>
                    <li><FaPlayCircle/></li>
                </ul>
                <div className='StoresPng w-24 flex gap-2 mt-7'>
        <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="App Store" />
        <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="Play Store" />
        </div>
                </section>


              {/* Mobile only */}

                <section className='S1 md:hidden -mb-3 z-50'>
                <h1 className='font-medium flex justify-between mx-5 md:hidden'>POPULAR LOCATIONS  <h1 onClick={()=>{setClick(!click)}} className='md:hidden'><ArrowBtn/></h1></h1>
                
                { click ?
                <ul className='text-sm font-extralight flex flex-col leading-4 ml-4'>
                   {Lists.map((list)=>{  
                     if (list.id===1) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}
                     </ul>
                :null}

            </section>
            <hr className='bg-theme-color'/>
            <section className='S2  md:hidden -my-6 '>
                <h1 className='font-medium flex justify-between mx-5 md:hidden'>TRENDING LOCATIONS <h1 onClick={()=>{setClick1(!click1)}} className='md:hidden'><ArrowBtn/></h1></h1>
                
                 { click1 ?
                <ul className='text-sm font-extralight flex flex-col leading-4 ml-4'>
                   {Lists.map((list)=>{  
                     if (list.id===2) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}
                     </ul>
                :null}

                </section>
                <hr/>
            <section className='S3 md:hidden -my-6'>
                <h1 className='font-medium flex justify-between mx-5 md:hidden'>ABOUT US <h1 onClick={()=>{setClick2(!click2)}} className='md:hidden'><ArrowBtn/></h1></h1>
               
                { click2 ?
                <ul className='text-sm font-extralight flex flex-col leading-4 ml-4'>
                   {Lists.map((list)=>{  
                     if (list.id===3) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}
                     </ul>
                :null}
                </section>
                <hr/>
            <section className='S4 md:hidden -mt-3'>
                <h1 className='font-medium flex justify-between mx-5 mb-4 md:hidden'>OLX <h1 onClick={()=>{setClick3(!click3)}} className='md:hidden'><ArrowBtn/></h1></h1>
                
                 { click3 ?
                <ul className='text-sm font-extralight flex flex-col leading-4 ml-4'>
                   {Lists.map((list)=>{  
                     if (list.id===4) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}
                     </ul>
                :null}
                </section>
        </div>
    </div>
    </div>
  )
}

export default FooterList
