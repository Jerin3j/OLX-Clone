import React, { useContext, useEffect } from 'react'
import './Header.css'
import OlxLogo from '../../Assets/OlxLogo'
import SearchIcon  from '../../Assets/SearchIcon'
import SearchIcon2 from '../../Assets/SearchIcon2'
import ArrowBtn from '../../Assets/ArrowBtn'
import OptionsIcon from '../../Assets/OptionsIcon'
import AddIcon from '../../Assets/AddIcon';
import { useState } from 'react'
import XIcon from '../../Assets/XIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBook, faBox, faBuilding, faCamera, faCar, faMapMarkerAlt, faMessage, faMobileAlt, faQuestion, faEarth, faSignOut, faBolt, faSignOutAlt, faScrewdriver } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Contexts/Context'
import { faHeart, faNoteSticky } from '@fortawesome/free-regular-svg-icons'
import { getAuth, signOut, } from "firebase/auth";
import { Link } from 'react-router-dom'

function Header () {

  const [nav, setNav] =useState(false)
  const [input, setInput] =useState(false) 
  const [profile, setProfile] = useState(false) 
  const [edit, setEdit] =useState(false)
  const {user} = useContext(AuthContext)
  
    const displayName = user?.displayName  // user displayName
   const len = displayName?.length-1   // displayName length-1 
   console.log(len);
  
     const handleLogout = () =>{
      const auth = getAuth();
        signOut(auth).then(() => {
        }).catch((error) => {
           alert(error.message) 
          });
      } 

  return (
    <div className='Header'>
     <div className="md:header-bg pt-0 md:pt-3 shadow">
       <div className='Inputs md:ml-60 flex flex-wrap md:flex-nowrap'>

        <button onClick={()=>{setNav(!nav)}} className="md:hidden p-1.5 md:p-0 inline-flex items-center ml-2.5 mt-2.5 ">
          <span className="focus:bg-teal-400">
          {nav? <XIcon/> : <OptionsIcon/>}
          </span>
        </button>
        
        {/* Mobile View Navbar */}
        {nav?
         user ?
          <div className={`MobileView bg-white absolute z-20 mt-12 w-full h-full ${nav? `slide` : null}`} >
      <div className='Profile inline-flex p-6 -ml-2'>
       <div className='ProfileIcon flex w-32 h-20 profile-pic self-center'>
       <h1 className='self-center left-10 text-4xl text-white uppercase truncate'>{user.displayName.slice(0, -len)}</h1>
       </div>
        <div className='Text flex flex-col ml-3' >
        <p className='text-left text-[15px] text-gray-500'>Hello,</p>
         <h1 className='font-medium text-xl  text-theme-color capitalize'>Welcome {user.displayName}</h1>
         <p className='text-left text-[12px] mt-1 text-gray-400'>We are built on trust. Help one another to get to know each other better.</p>
        </div>
       </div>
          <hr/>
          <ul className='cursor-pointer text-theme-color'>
            <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faCamera} className="pr-4 pl-2 "/>Start selling</li>
            <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faHeart} clabsolute className="pr-4 pl-2 "/>My Ads</li>
            <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faBook} className="pr-4 pl-2"/>Buy Business Packages</li>
            <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faMessage} className="pr-4 pl-2"/>Bought Packages & Billing</li>
             <hr/> 
            <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faQuestion} className="pr-4 pl-2"/>Help</li>
            <li className='py- 3 hover:bg-teal-200'><FontAwesomeIcon icon={faEarth} className="pr-4 pl-2"/>Select language</li>
             <hr/>
            <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faScrewdriver} className="pr-4 pl-2"/>Settings</li>
            <li className='py-3 hover:bg-teal-200' onClick={handleLogout}><FontAwesomeIcon icon={faSignOut} className="pr-4 pl-2"/>Logout</li>
          </ul>
        </div>
        :
        <div className="MobileView bg-white absolute mt-12 w-full h-full">
        <div className='Profile inline-flex p-6 -ml-2'>
         <img className='w-24 h-24 'src='https://statics.olx.in/external/base/img/avatar_empty_state.png'></img>
          <div className='Text flex flex-col ml-3'>
           <h1 className='font-medium text-xl mt-3 text-theme-color'>Welcome to OLX!</h1>
           <p className='text-left text-[13px] mt-1 text-gray-400'>Take charge of your buying and selling journy.</p>
          </div>
         </div>
            <hr/>
            <ul className='cursor-pointer text-theme-color'>
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faCamera} className="pr-4 pl-2 "/>Start selling</li>
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faBook} className="pr-4 pl-2"/>My ADS</li>
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faMessage} className="pr-4 pl-2"/>Chat</li>
               <hr/>
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faQuestion} className="pr-4 pl-2"/>Help</li>
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faEarth} className="pr-4 pl-2"/>Select language</li>
            </ul>
            <div className='mx-4 h-12 mt-5 flex items-center pl-36 rounded bg-theme-color cursor-pointer'>
               <Link to={'/login'}>
               <h1 className='text-center font-medium text-xl text-white'>Login</h1>
               </Link>
            </div>
        </div> : null}
        

          <span className='ml-3 mt-2.5 md:ml-0 md:mt-0 mr-5 fill-theme-color'>
            <OlxLogo widthHeight={'w-9 h-9 md:h-12 md:w-12'}/>
          </span>
          {nav? null :<div className='MobileView md:hidden text-theme-color mt-4 ml-3'>
          <h1 className='text-sm font-medium capitalize'>bangalore airport area, bengaluru <FontAwesomeIcon icon={faMapMarkerAlt}/></h1>
           </div> /* nav == true element not shows otherwise it shows*/}
         <div className='searchArea hidden md:block truncate mr-4 border-theme-color bg-white relative px-2 pt-3 border-2 outline-none rounded active:border-cyan-500 w-72 '>
           <input type='text' className='text-base ml-7 truncate placeholder-slate-500 text-theme-color w-10/12' placeholder='Search city, area or locality'  />
            <span className=' flex tems-center -mt-6'>
             <SearchIcon />
               <span className='ml-52 '>
                <ArrowBtn/>
               </span>
            </span>
          </div>

         <div className='searchItems flex md:block mt-3 md:mt-0 md:px-2 py-1.5 md:py-3 mx-2 md:mx-0 w-full md:w-600 border-theme-color bg-white  border-2 outline-none rounded '>
           <span className='MobileView md:hidden flex h-5 w-5 mx-4'>
            <SearchIcon />
           </span>
            <input onClick={()=>{setInput(true)}} type='text' className='text-base truncate placeholder-slate-500 text-theme-color w-full active:border-cyan-500' placeholder='Find Cars, Mobile Phones and more..' />
         </div>
          <div className='hidden md:flex items-center w-12 -ml-1 pl-3 fill-white font-normal rounded bg-theme-color cursor-pointer '>
            <SearchIcon2 />
          </div>


       {input?
          <div className='MobileView transition-all ease-in-out absolute md:hidden w-full h-full bg-white'>
           <div className='flex justify-between'>
              <FontAwesomeIcon onClick={()=>{setInput(false)}} icon={faArrowLeft} className='p-5 h-7' />
                <h1 className='SearchText mt-4 mr-2 font-semibold underline decoration-2 underline-offset-4 hover:no-underline cursor-pointer truncate fill-theme-color text-theme-color'>Search</h1>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='searchItems flex mt-3 py-2 w-[96%] mx-2  border-theme-color  bg-white border-2 outline-none rounded '>
               <span className='MobileView md:hidden flex h-5 w-5 mx-4'>
                <SearchIcon />
               </span>
              <input type='text' className='text-base truncate placeholder-slate-500 text-theme-color w-full active:border-cyan-500' placeholder='Find Cars, Mobile Phones and more..' />
             </div>
             <div className='searchItems flex mt-3 py-2 w-[96%] mx-2  border-theme-color  bg-white border-2 outline-none rounded '>
               <span className='MobileView md:hidden flex h-5 w-5 mx-4'>
                <SearchIcon />
               </span>
              <input type='text' className='text-base truncate placeholder-slate-500 text-theme-color w-full active:border-cyan-500' placeholder='Search city, area or locality' />
             </div>
                <p className='uppercase m-4 mt-5  text-gray-500 text-xs'>Popular Categories</p>
                <ul className='cursor-pointer text-theme-color'>
                  <li className='py-3 ml-2'><FontAwesomeIcon icon={faCar} className="pr-4 pl-2" />OLX Autos (Cars)</li>
                  <li className='py-3 ml-2'><FontAwesomeIcon icon={faBuilding} className="pr-4 pl-2" />Properties</li>
                  <li className='py-3 ml-2'><FontAwesomeIcon icon={faMobileAlt} className="pr-4 pl-2" />Mobiles</li>
                  <li className='py-3 ml-2'><FontAwesomeIcon icon={faBox} className="pr-4 pl-2" />Jobs</li>
                </ul>
            </div>
          </div>: null}

           <div className='LangSelect hidden md:flex px-10 truncate fill-theme-color text-theme-color' >
             <select className='appearance-none focus:outline-none option-bg px-5 w-28 -ml-8 text-base cursor-pointer font-medium uppercase' >
               <option className='options outline-none truncate'>English</option>
               <option className='options outline-none truncate'>Physics</option>
            </select>
            <span className='mt-4 -ml-5 mr-2 cursor-pointer'>
             <ArrowBtn/>
            </span>
         </div>

        <div className='LoginName'> 
        {user ?
        <div className='hidden md:flex DesktopLogined '>
            {/* <FontAwesomeIcon icon={faMessage}/>
            <FontAwesomeIcon icon={faNoteSticky}/> */}
           <div onClick={()=>{setProfile(!profile)}} className='ProfileIcon flex items-center gap-3'>
           {/* <img className='w-10 h-10 mt-3'src='https://statics.olx.in/external/base/img/avatar_1.png'></img> */}
           <div className='ProfileIcon-small flex mt-3 w-10 h-10 profile-pic self-center'>
         <h1 className='self-center left-10 text-xl text-white uppercase truncate'>{user.displayName.slice(0, -len)}</h1>
         </div>
            <span> <ArrowBtn/> </span>
           </div>
        </div>
        :
        <Link to={'/login'}>
         <span className='LoginText hidden md:block mt-3 -ml-3 text-lg font-medium underline decoration-2 underline-offset-4 hover:no-underline cursor-pointer truncate fill-theme-color text-theme-color'>Login</span>
         </Link>
         }

        { profile ?
         <div className='ProfileOpt hidden md:block absolute z-20 bg-white right-80 w-80 mt-4 rounded-lg shadow-lg '>
            <div className={`MobileView `}>
        <div className='Profile inline-flex p-6 -ml-2'>
         <div className='ProfileIcon flex w-28 h-14 profile-pic self-center'>
         <h1 className='self-center left-10 text-4xl text-white uppercase truncate'>{user.displayName.slice(0, -len)}</h1>
         </div>
          <div className='Text flex flex-col ml-3'>
          <p className='text-left text-[15px] text-gray-500'>Hello,</p>
           <h1 className='font-medium text-xl  text-theme-color capitalize'>Welcome {user.displayName}</h1>
         <Link to={'/editProfile/info'}>
         <h1 className='underline' onClick={()=>{setEdit(true)}}>View or edit Profile</h1>
         </Link>
           {edit?
            <div className="EditProfile">

            </div>: undefined}
           <p className='text-left text-[12px] mt-1 text-gray-400'>We are built on trust. Help one another to get to know each other better.</p>
          </div>
         </div>
            <hr/>
            <ul className='cursor-pointer text-theme-color'>
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faHeart} clabsolute className="pr-4 pl-2 "/>My Ads</li>
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faBook} className="pr-4 pl-2"/>Buy Business Packages</li>
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faMessage} className="pr-4 pl-2"/>Bought Packages & Billing</li>
               <hr/> 
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faQuestion} className="pr-4 pl-2"/>Help</li>
              <li className='py-3 hover:bg-teal-200'><FontAwesomeIcon icon={faScrewdriver} className="pr-4 pl-2"/>Settings</li>
              <li className='py-3 hover:bg-teal-200' onClick={handleLogout}><FontAwesomeIcon icon={faSignOut} className="pr-4 pl-2"/>Logout</li>
            </ul>
        </div>
          </div>:null}
         
         </div>
         <div className="sellMenu fixed z-20 md:sticky bottom-6 mx-36 md:mx-6 md:mt-1 h-12 w-24 cursor-pointer fill-theme-color text-theme-color">
         <Link to={"/createProduct"}>
          <div className='sellMenu-in pt-2 px-7 flex rounded'>
            <span className='-ml-4'>
            <AddIcon/>
              </span>        
                <span className='ml-1.5 -mt-1 uppercase font-bold'>sell</span>
          </div>
         </Link>
         </div>
        </div>
      </div>
      <div className='hidden md:flex bg-white h-8 mt-1 shadow border-black items-center justify-evenly' >
           <div className='flex text-theme-color cursor-pointer'>
           <h1 className='uppercase font-medium mr-2 truncate'>all categories</h1>
            <ArrowBtn/>
           </div>  
           <ul className='flex text-theme-color xl:-ml-64 truncate cursor-pointer'>
            <li className='font-light text-sm truncate'>Cars</li>
            <li className='font-light text-sm truncate'>Motor Cycles</li>
            <li className='font-light text-sm truncate'>Mobile Phones</li>
            <li className='font-light text-sm truncate'>For Sale: House & Appartments</li>
            <li className='font-light text-sm truncate'>Scooters</li>
            <li className='font-light text-sm truncate'>Commercial & Other Vechiles</li>
            <li className='font-light text-sm truncate'>For Rent: House & Appartments</li>
            </ul>
      </div>
    </div>
    
  )
}

export default Header

 

