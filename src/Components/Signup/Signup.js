import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { getAuth , createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithRedirect, getRedirectResult, } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from '../../Contexts/Context';
const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  const app = useContext(FirebaseContext)   // Context

  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();


 


  const HandleSubmit = ()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
      const User = result.user;
       updateProfile(auth.currentUser, {displayName:username}).then( async()=>{
        await addDoc(collection(db, "Users"), {
          id: User.uid,
          username,
          email,
          phonenumber,
          password
        })
           navigate('/login') 
        .catch((error) => {
          console.log("db : "+error.message) })
       })
      })
    .catch((error) => {
      console.log("auth : "+error.message);
    })
  }
    const GoogleSignUp = async () =>{ // Add async keyword to make function asynchronous
        auth.languageCode = 'it';
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        try {
          await signInWithRedirect(auth, provider); // Wait for sign-in redirect to complete
          const result = await getRedirectResult(auth); // Wait for redirect result
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user; // Use lowercase variable name to avoid confusion with User class
          const pa = result.credential.passwordHash; // Use credential.passwordHash to get password hash
          await addDoc(collection(db, "Users"), {
            id: user.uid, // Use lowercase variable name
            pa: pa, // Use colon to assign value to property
            token: token // Use colon to assign value to property
          });
          alert ("Google signup successful"); // Change alert message
          navigate('/login');
        } catch (error) { // Catch any errors and log them
          console.log(error);
          alert ("Google signup failed"); // Change alert message
        }
      }
  return (
    <div className='SignUp'>
      <div className='signup-box -translate-x-1/2 -translate-y-1/2 flex flex-col h-full w-full md:w-[500px] md:h-[600px] justify-center border-theme-color border-2 rounded-xl'>
        <img src='https://imgs.search.brave.com/U0CUl7LbgMMwaA47z3INztIYvViivqLcHXJktFKSn4I/rs:fit:617:409:1/g:ce/aHR0cHM6Ly93d3cu/cGFrZmVhdHVyZXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA0L09MWF9O/ZXdfTG9nby5wbmc' className='w-36 md:w-52 rounded-full self-center md:my-4 ' alt='OLX'/>
        <div className='flex flex-col px-2 '>
            <label>Username</label>
            <input onChange={(e)=>(setUsername(e.target.value))} value={username} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'text'} name='name'/>
            <label>Email</label>
            <input onChange={(e)=>(setEmail(e.target.value))} value={email} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'email'} name='name' placeholder={'mathew@gmail.com'}/>
            <label>Phone</label>
            <input onChange={(e)=>(setPhonenumber(e.target.value))} value={phonenumber} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'tel'}  pattern="[0-9]{10}" maxLength={12} required placeholder={'95++++++79'}/>
            <label>Password</label>
            <input onChange={(e)=>(setPassword(e.target.value))} value={password} className='border-2 p-1 mb-2 text-gray-700 rounded' type={'password'} name='name' minLength={6} />

            <button onClick={HandleSubmit} className='cursor-pointer mt-4 bg-theme-color h-10 w-full self-center text-white rounded'>Sign up</button>
            <button onClick={GoogleSignUp} className='cursor-pointer mt-4 self-center text-blue-600 text-sm ' >Sign up with Google</button>
        </div>
        <p className='font-thin text-xs self-center mt-4 '>If you already have an account?</p>
        <Link to='/login'>
          <h1 className='text-theme-color my-3 font-medium mb-10 text-center decoration-2 underline-offset-4 hover:underline cursor-pointer'>Login</h1>
        </Link>
      </div>
    </div>
  )
  
}

export default Signup





