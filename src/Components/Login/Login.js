import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { app } from "../../Firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loading from '../../Assets/Loading/Loading';
import {toast, ToastContainer} from 'react-toastify'


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginEmail, setloginEmail] = useState("")
    const [loginPassword, setloginPassword] = useState("")
    const navigate = useNavigate()

  const handleLogin = () =>{
    setLoading(true);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(()=>{
      toast('Logined')
      setLoading(false)
      navigate('/')
    
    })
    .catch((error)=>{
      console.log(error.message);
      alert(error.code.slice(5))
    })
    }
    
    if (loading) return (
      <Loading/>
  )
    return (
    <div className='LoginPage'>
       <div className='absolute top-1/2 left-1/2 h-[450px] w-80 flex flex-col justify-center -translate-x-1/2 -translate-y-1/2 ] md:w-[450px]  border-theme-color border-2 rounded-xl'>
        <img src='https://imgs.search.brave.com/U0CUl7LbgMMwaA47z3INztIYvViivqLcHXJktFKSn4I/rs:fit:617:409:1/g:ce/aHR0cHM6Ly93d3cu/cGFrZmVhdHVyZXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA0L09MWF9O/ZXdfTG9nby5wbmc' className='w-36 md:w-52 rounded-full self-center md:my-4' alt='OLX'/>
        <div className='flex flex-col px-2 '>
            <label>Email</label>
            <input onChange={(e)=>{setloginEmail(e.target.value)}} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'email'} name='name' placeholder={'yourgmail@gmail.com'}/>
            <label>Password</label>
            <input onChange={(e)=>{setloginPassword(e.target.value)}} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'password'} name='name' minLength={6} />

            <button onClick={handleLogin} className='cursor-pointer mt-4 bg-theme-color h-10 w-full self-center text-white rounded'>Login</button>
        </div>
        
          <p className='font-thin text-xs self-center mt-4 '>If you don't have an account?</p>
         

         <Link to='/signup'>
         <h1 className='text-theme-color my-3 font-medium text-center decoration-2 underline-offset-4 hover:underline cursor-pointer'>Sign Up</h1>
         </Link>
             </div>
            <ToastContainer hideProgressBar={true} position="bottom-center" theme='colored' limit={1} />

        </div>
  )
}

export default Login
