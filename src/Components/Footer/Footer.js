import { fa4, faIgloo } from '@fortawesome/free-solid-svg-icons'
import { IconPack } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ArrowBtn from '../../Assets/ArrowBtn';

const Footer = () => {
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
    <div className='Footer '>
        <div className=' Sections flex flex-col md:flex-row justify-center pt-4 mt-8 md:mt-0 w-full flex-wrap gap-12 item-center bg-[#ebeeef] px-2 md:px-5'>
            <section className='S1 hidden md:block'>
                <text className='font-medium flex  justify-around'>POPULAR LOCATIONS </text>
                    <ul className='text-sm font-extralight flex flex-col leading-3'>
                  
                    {Lists.map((list)=>{  
                     if (list.id===1) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}

                    </ul>
            </section>
            <section className='S2 hidden md:block'>
                <text className='font-medium flex justify-around'>TRENDING LOCATIONS </text>
                <ul className='text-sm font-extralight flex flex-col leading-3'>

                {Lists.map((list)=>{  
                     if (list.id===2) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}

                     </ul>
                </section>
            <section className='S3 hidden md:block'>
                <text className='font-medium flex justify-center '>ABOUT US </text>
                <ul className='text-sm font-extralight flex flex-col leading-3'>
                
                {Lists.map((list)=>{  
                     if (list.id===3) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}

                     </ul> 
                </section>
            <section className='S4 hidden md:block'>
                <text className='font-medium flex self-center'>OLX</text>
                <ul className='text-sm font-extralight flex flex-col leading-3'>
                   
                {Lists.map((list)=>{  
                     if (list.id===4) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}

                </ul>
                </section>
            <section className='S4 hidden md:block'>
                <text className='font-medium '>FOLLOW US</text>
                <ul className='flex'>
                    <li><FontAwesomeIcon icon={fa4}/></li>
                    <li><FontAwesomeIcon icon={faIgloo}/></li>
                    <li><FontAwesomeIcon icon={faIgloo}/></li>
                    <li><FontAwesomeIcon icon={faIgloo}/></li>
                </ul>
                <div className='StoresPng w-24 flex gap-2 mt-14'>
        <img src="https://statics.olx.in/external/base/img/appstore_2x.webp" alt="App Store" />
        <img src="https://statics.olx.in/external/base/img/playstore_2x.webp" alt="Play Store" />
        </div>
                </section>


              {/* Mobile only */}

                <section className='S1 md:hidden'>
                <text className='font-medium flex justify-between mx-5 md:hidden'>POPULAR LOCATIONS  <text onClick={()=>{setClick(!click)}} className='md:hidden'><ArrowBtn/></text></text>
                
                { click ?
                <ul className='text-sm font-extralight flex flex-col leading-3'>
                   {Lists.map((list)=>{  
                     if (list.id===1) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}
                     </ul>
                :null}

            </section>
            <section className='S2  md:hidden'>
                <text className='font-medium flex justify-between mx-5 md:hidden'>TRENDING LOCATIONS <text onClick={()=>{setClick1(!click1)}} className='md:hidden'><ArrowBtn/></text></text>
                
                 { click1 ?
                <ul className='text-sm font-extralight flex flex-col leading-3'>
                   {Lists.map((list)=>{  
                     if (list.id===2) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}
                     </ul>
                :null}

                </section>
            <section className='S3 md:hidden'>
                <text className='font-medium flex justify-between mx-5 md:hidden'>ABOUT US <text onClick={()=>{setClick2(!click2)}} className='md:hidden'><ArrowBtn/></text></text>
               
                { click2 ?
                <ul className='text-sm font-extralight flex flex-col leading-3'>
                   {Lists.map((list)=>{  
                     if (list.id===3) {
                      return(
                    list.name.map((li)=>(
                      <li>{li}</li>
                     ))) }})}
                     </ul>
                :null}

                </section>
            <section className='S4 md:hidden'>
                <text className='font-medium flex justify-between mx-5 mb-4 md:hidden'>OLX <text onClick={()=>{setClick3(!click3)}} className='md:hidden'><ArrowBtn/></text></text>
                
                 { click3 ?
                <ul className='text-sm font-extralight flex flex-col leading-3'>
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
        <div className='FooterEnd w-full h-20 pt-4 flex justify-evenly gap-2 md:gap-44 bg-[#042F34] text-white'>
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
