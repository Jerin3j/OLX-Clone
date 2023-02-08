import React from 'react'

const Login = () => {
  return (
    <div className='LoginPage'>
       <div className='absolute top-1/2 left-1/2 h-[400px] w-80 flex justify-center -translate-x-1/2 -translate-y-1/2 flex flex-col md:w-[450px]  border-theme-color border-2 rounded-xl'>
        <img src='https://imgs.search.brave.com/Zn6Peaj4GljFpfbU0qLW87Maaz_jZ9mJ0lTuwoBPLRw/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9s/Y0Y5MW9xNWNUZy9t/YXhyZXNkZWZhdWx0/LmpwZw' className='w-20 md:w-52 rounded-full self-center md:my-4 '>
        </img>
        <form className='flex flex-col px-2 '>
            <label>Email</label>
            <input className='border-2 p-1 mb-2 text-gray-700 rounded' type={'email'} name='name' placeholder={'yourgmail@gmail.com'}/>
            <label>Password</label>
            <input className='border-2 p-1 mb-2 text-gray-700 rounded' type={'password'} name='name' minLength={6} />

            <button className='cursor-pointer mt-4 bg-theme-color h-10 w-full self-center text-white rounded'>Login</button>
        </form>
        
          <p className='font-thin text-xs self-center mt-4 '>If you don't have an account?</p>
           <a href=''>
          <h1 className='text-theme-color my-3 font-medium text-center decoration-2 underline-offset-4 hover:underline cursor-pointer'>Sign Up</h1>

           </a>    
             </div>
    </div>
  )
}

export default Login
