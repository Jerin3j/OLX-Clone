import React from 'react';
import OlxLogo from '../../Assets/OlxLogo';
import './Signup.css';

const Signup = () => {
  return (
    <div className='SignUp'>
      <div className='signup-box -translate-x-1/2 -translate-y-1/2 flex flex-col md:w-[500px] border-theme-color border-2 rounded-xl'>
        <span className='w-20 md:w-32 self-center md:my-4 '>
        <OlxLogo/>
        </span>
        <form className='flex flex-col px-2 '>
            <label>Username</label>
            <input className='border-2 p-1 mb-2 text-gray-700 rounded' type={'text'} name='name' defaultValue={'Mathew'}/>
            <label>Email</label>
            <input className='border-2 p-1 mb-2 text-gray-700 rounded' type={'email'} name='name' placeholder={'mathew@gmail.com'}/>
            <label>Phone</label>
            <input className='border-2 p-1 mb-2 text-gray-700 rounded' type={'tel'}  pattern="[0-9]{10}" maxLength={12} required defaultValue={'95++++++79'}/>
            <label>Password</label>
            <input className='border-2 p-1 mb-2 text-gray-700 rounded' type={'password'} name='name' minLength={6} defaultValue={''}/>

            <button className='cursor-pointer mt-4 bg-theme-color h-10 w-full self-center text-white rounded'>SignUp</button>
        </form>
          <h1 className='text-theme-color my-3 font-medium text-center'>Login</h1>
      </div>
    </div>
  )
}

export default Signup






{/* <div>
<div className="signupParentDiv">
  <img width="200px" height="200px" src={ko} ></img>
  <form>
    <label htmlFor="fname">Username</label>
    <br />
    <input
      className="input"
      type="text"
      id="fname"
      name="name"
      defaultValue="John"
    />
    <br />
    <label htmlFor="fname">Email</label>
    <br />
    <input
      className="input"
      type="email"
      id="fname"
      name="email"
      defaultValue="John"
    />
    <br />
    <label htmlFor="lname">Phone</label>
    <br />
    <input
      className="input"
      type="number"
      id="lname"
      name="phone"
      defaultValue="Doe"
    />
    <br />
    <label htmlFor="lname">Password</label>
    <br />
    <input
      className="input"
      type="password"
      id="lname"
      name="password"
      defaultValue="Doe"
    />
    <br />
    <br />
    <button>Signup</button>
  </form>
  <a>Login</a>
</div>
</div> */}
