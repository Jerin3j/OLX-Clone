import React, { useState } from 'react';
import OlxLogo from '../../Assets/OlxLogo';
import './Signup.css';
const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit=()=>{
    console.log(username+ password);
  }
  return (
    <div className='SignUp'>
      <div className='signup-box -translate-x-1/2 -translate-y-1/2 flex flex-col md:w-[500px] h-[500px] justify-center border-theme-color border-2 rounded-xl'>
        <img src='https://imgs.search.brave.com/Zn6Peaj4GljFpfbU0qLW87Maaz_jZ9mJ0lTuwoBPLRw/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9s/Y0Y5MW9xNWNUZy9t/YXhyZXNkZWZhdWx0/LmpwZw' className='w-20 md:w-52 rounded-full self-center md:my-4 '>
        </img>
        <form className='flex flex-col px-2 '>
            <label>Username</label>
            <input onChange={(e)=>(setUsername(e.target.value))} value={username} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'text'} name='name'/>
            <label>Email</label>
            <input onChange={(e)=>(setEmail(e.target.value))} value={email} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'email'} name='name' placeholder={'mathew@gmail.com'}/>
            <label>Phone</label>
            <input onChange={(e)=>(setPhonenumber(e.target.value))} value={phonenumber} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'tel'}  pattern="[0-9]{10}" maxLength={12} required placeholder={'95++++++79'}/>
            <label>Password</label>
            <input onChange={(e)=>(setPassword(e.target.value))} value={password} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'password'} name='name' minLength={6} />

            <button onClick={HandleSubmit} className='cursor-pointer mt-4 bg-theme-color h-10 w-full self-center text-white rounded'>Sign up</button>
        </form>
        <p className='font-thin text-xs self-center mt-4 '>If you already have an account?</p>
          <h1 className='text-theme-color my-3 font-medium text-center decoration-2 underline-offset-4 hover:underline cursor-pointer'>Login</h1>
      </div>
    </div>
  )
}

export default Signup





