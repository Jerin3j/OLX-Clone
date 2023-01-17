import React from 'react'
import './Header.css'
import OlxLogo from '../../Assets/OlxLogo'
import SearchIcon  from '../../Assets/SearchIcon'
import SearchIcon2 from '../../Assets/SearchIcon2'
import ArrowBtn from '../../Assets/ArrowBtn'
import OptionsIcon from '../../Assets/OptionsIcon'
import SellMenu from '../../Assets/SellMenu';
import AddIcon from '../../Assets/AddIcon';

function Header () {
  return (
    <div className="header-bg px-80 -mt-5 flex">
       <span className='-ml-10 mr-5 fill-theme-color'>
       <OlxLogo />
       </span>
       <div className='Inputs inline-flex'>
        <div className='searchItems mr-4 border-theme-color bg-white relative px-2 pt-3 border-2 outline-none rounded focus:border-cyan-500 w-72'>
        <input type='text' className='text-base pl-7 truncate placeholder-slate-500 text-theme-color w-10/12' placeholder='Search city, area or locality'  />
          <span className=' flex items-center -mt-6'>
          <SearchIcon />
         <span className='ml-52 '>
         <ArrowBtn/>
         </span>
           </span>
           </div>

        <div className='searchItems border-theme-color bg-white relative px-2 py-3  border-2 outline-none rounded input-size'>
          <input type='text' className='text-base truncate placeholder-slate-500 text-theme-color w-full' placeholder='Find Cars, Mobile Phones and more..' />
          
           </div>
           <div className=' flex items-center w-12 -ml-1 pl-3 fill-white font-normal rounded bg-theme-color  '>
          <SearchIcon2 />
           </div>
           
           <div className='inline-flex float-right fill-theme-color text-theme-color'>
           <div className='LangSelect flex px-10' >
         <select className='appearance-none focus:outline-none option-bg block px-5 w-28 -ml-8 text-base cursor-pointer font-medium uppercase' >
           <option className='options outline-none '>English</option>
           <option className='options outline-none '>Physics</option>
        </select>
         <span className='mt-4 -ml-5 cursor-pointer'>
          <ArrowBtn/>
         </span>
      </div>
         <h1 className='mt-3 -ml-3 text-lg font-medium underline decoration-2 underline-offset-4 hover:no-underline cursor-pointer'>Login</h1>
         
         <div className="sellMenu mt-1 mx-6 h-22 cursor-pointer  ">
          <div className='sellMenu-in pt-2 px-7 flex rounded'>
            <AddIcon/>
            <span className='ml-2 -mt-1'>sell</span>
          </div>
        </div>

      </div>
       </div>
    </div>
  )
}

export default Header

 




    // <div className="headerParentDiv">
    //   <div className="headerChildDiv">
    //     <div className="brandName">
    //       <OlxLogo></OlxLogo>
    //     </div>
    //     <div className="placeSearch">
    //       <SearchIcon></SearchIcon>
    //       <input type="text" />
    //       <ArrowBtn></ArrowBtn>
    //     </div>
    //     <div className="productSearch">
    //       <div className="input">
    //         <input
    //           type="text"
    //           placeholder="Find car,mobile phone and more..."
    //         />
    //       </div>
    //       <div className="searchAction">
    //         <SearchIcon color="#ffffff"></SearchIcon>
    //       </div>
    //     </div>
    //     <div className="language">
    //       <span> ENGLISH </span>
    //       <ArrowBtn></ArrowBtn>
    //     </div>
    //     <div className="loginPage">
    //       <span>Login</span>
    //       <hr />
    //     </div>

    //     <div className="sellMenu">
    //       <div className="sellMenuContent">
    //         <span>SELL</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>




  //   <div className='headerParent header-bg '>
  //   <div className='headerChild container flex flex-wrap items-center'>
  //     <div className='threeLine'>
  //     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
  //       <span class="sr-only">Open main menu</span>
  //       <OptionsIcon/>
  //     </button>
  //     </div>
  //     <OlxLogo className='ml-3'/>
  //     <div className='  '>
  //          <div className='locationBtn text-center  input-border hidden md:block '>
  //           <SearchIcon/>
  //         <input type='text' className='' placeholder='Search city, area or locality' />
  //         </div>
          
  //         <div className='searchBtn text-center mt-5 h-12 w-11/12 md:w-72 -ml-20 input-border absolute '>
  //         <input type='text' className=' text-center' placeholder='Find Cars, Mobile Phones and more..' />
  //         <SearchIcon2 className=" -mt-48"/>
  //         </div>
        
  //     <div className='LangSelect float-right hidden'  >
  //     <select name = "dropdown" id='LangSelect'>
  //         <option defaultValue = "English" >English</option>
  //         <option defaultValue = "Physics">Physics</option>
  //      </select>
  //       <button aria-labelledby='LangSelect'>
  //         <ArrowBtn/>
  //       </button>
  //     </div>

  //     </div>
  //     <div className='loginPage hidden md:bloc'>
  //     <span >Login</span>
  //     </div>

  //     <div className="sellMenu ">
  //        <div className="sellMenuContent text-center mb-6">
  //          <span>SELL</span>
  //        </div>
  //      </div>
  //   </div>
  // </div>