import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faArrowCircleLeft, faArrowLeft, faBicycle, faCarAlt, faCarSide, faMobileScreen, faRoadSpikes, faSnowman } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{ useContext, useState } from 'react'
import   './Create.css'
import { Navigate, useNavigate } from 'react-router-dom'
import ArrowBtn from '../../Assets/ArrowBtn'
import { AuthContext } from '../../Contexts/Context'

const Create = () => {

  const [category, setCategory] = useState()
  const [next, setNext] = useState(false)
  const {user} = useContext(AuthContext)  // Logined user {}

  const navigate = useNavigate()
   
  console.log(category)
  return (
    <div className='CreateProducts flex flex-col items-center'> 
      <div className="backBtn text-xl gap-4 text-theme-color bg-whitesmoke flex pt-7 pl-7 h-[74px] w-full">
        <FontAwesomeIcon icon={faArrowLeft} onClick={()=>navigate(-1)}/>
        <h1 className='font-semibold text-2xl -mt-1'>Post Your Ad</h1>
      </div>

        <div className={`ProductTitle ${next? "hidden" :"block"} flex flex-col md:w-[500px] `}>
          <div className='PostItems mt-5 md:w-[500px] border-2 rounded shadow-xl'>
          <h1 className='uppercase text-lg ml-4 m-5 font-medium underline decoration-clone underline-offset-8 decoration-2 decoration-slate-500'>select a category</h1>
            <ul className=''>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faCarAlt}/>OLX Autos (Cars)</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faBuilding}/>Properties</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faMobileScreen}/>Mobiles</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faRoadSpikes}/>Jobs</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faBicycle}/>Bikes</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faCarAlt}/>Electronics & Appliances</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faCarAlt}/>Books, Sports & Hobbies</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faCarAlt}/>Furniture</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faCarAlt}/>Pets</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faCarAlt}/>Fashion</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faCarAlt}/>Services</li>
                <li className='active:bg-teal-500' onClick={(e)=>setCategory(e.target.textContent)}><FontAwesomeIcon className='mr-4' icon={faCarAlt}/>Custom..</li>
                </ul>
            </div>
            <button onClick={()=>setNext(!next)} className='text-white h-9 w-16 font-semibold rounded self-center mt-4 focus:ring-1 bg-theme-color'>Next</button>
        </div>
       {next?
       <div className='MakeProduct'>
        <div className="PostBox flex flex-col  border rounded">
          <div className="CategoryShow flex flex-col">
            <h1 className="font-semibold text-2xl uppercase  mx-5 my-2 self-center">Selected category</h1>
            <div className="flex justify-between  mx-5 mb-1">
              <h1 className="text-md ">Category selected - {category}</h1>
              <h1 className="font-semibold underline hover:no-underline cursor-pointer " onClick={()=>setNext(!next)}>Change</h1>
            </div>
            <hr/>
            <div className="PostDetails text-theme-color mx-2 md:mx-5 md:w-[800px]">
              <h1 className='uppercase font-extrabold text-xl mt-10'>Include some brands</h1>
               <form className="flex flex-col">
              <h1 className='font-medium text-md pl-0.5 text-gray-500 '>Ad title *</h1>
               <input type="text" className="rounded h-10 border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 " />
             <h1 className='font-medium text-md pl-0.5 text-gray-500 '>Description *</h1>
              <input type="text" className="rounded border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 py-12 text-left" />
             <hr/>
             <h1 className='uppercase font-extrabold text-xl '>set a price</h1>
              <h1 className='font-medium text-md pl-0.5 text-gray-500 '>Price*</h1>
               <input type="text" className="rounded h-10 border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 " />
                <hr />
                
                <div className="imageInput flex flex-col my-10 justify-around">
                <h1 className='uppercase font-extrabold text-xl'>Upload up to 12 photos</h1>
                  <label className="fileInput w-20 rounded  z-30 mx-10  bg-blue-500">
                    <span>Upload images</span>
                  <input accept=".jpg, .jpeg, .png" type="file"  className='  file:rounded-3xl file:text-sm'/>
                  </label>
                </div>

                <hr/>
                <h1 className='uppercase font-extrabold text-xl'>confrom your location</h1>
                <input type="text" className="rounded h-10 border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 w-full md:w-52" />
                <hr/>
                <div className="UserDetails flex flex-col">
                <h1 className='uppercase font-extrabold text-xl mt-10'>Review your details</h1>
                
              <h1 className='font-thin text-md pl-0.5 text-theme-color'>Name</h1>
                <input defaultValue={user.displayName} def type="text" className="rounded h-10 capitalize border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 w-full md:w-52" />
                <h1 className="text-md font-medium mt-5">Let's verify your account</h1>
                <h1 className="font-light">We will send you a confirmation code by sms on the next step.</h1>
                <div className="my-8">
                  <h1 className="font-thin text-theme-color capitalize">Mobile Phone Number*</h1>
                  <input type="text" className="rounded h-10 border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 w-full md:w-52" />
                </div>
                
                </div>
            <button onClick={()=>setNext(!next)} className='text-white h-9 w-16 font-semibold rounded self-center mt-4 focus:ring-1 bg-theme-color'>Next</button>
              </form>
            </div>
          </div>
        </div>          
       </div>:null
      }
    </div>
  )
}

export default Create
