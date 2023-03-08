import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, FirebaseContext } from '../../Contexts/Context'
import { collection, collectionGroup, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import { app } from "../../Firebase/config";
import { getAuth, updateCurrentUser, updateProfile } from "firebase/auth";
import { Link, Navigate, NavigationType, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Editprofile = () => {

    const [username, updateUsername] = useState('')
    const [phonenumber, updatePhoneNumber] = useState('')
    const [email, updateEmail] = useState('')
    const [userDoc, setUserDoc] = useState([])
    const [docId, getDocId] = useState()
    const {user} = useContext(AuthContext)  // Logined user {}
    const app = useContext(FirebaseContext)
    const auth = getAuth(app)
    const db = getFirestore(app)
    const navigate = useNavigate();
    

    console.log("user details ",user)
      console.log("document", docId);
      

      useEffect(()=>{
        
        (async()=>{
          const usersCollection = collection(db, 'Users');
          const currentUserQuery = query(usersCollection, where("id","==", user?.uid)); //not maping coll , we use where to find oor current user uid == firestore doc.coll id
          const currentUserDocs = await getDocs(currentUserQuery);
          console.log("test doc  ",currentUserDocs);
          currentUserDocs.forEach((doc) => (
            
            setUserDoc(doc.data()),
            getDocId(doc.id)
    
          ))
            })().catch((err)=>{
          console.log(err.message);
          })
          
        },[])
      

 
    const setData=async()=>{
      updateProfile(auth.currentUser, {displayName: username, }).then(async()=>{
        console.log("updated");
        alert("updated");
        const docRef = await doc(db, `Users/${docId}`)
        await updateDoc(docRef,{
            username,
          phonenumber,  //if  usernam ? updated  do update in firestore
          email
        }).catch((err)=>{
          console.log(err.message);
        })

      }).catch((error) => {
        console.log("updatePF : "+error.message);
      })
    }


  return (
    <div className='Editprofile '>
      <div className="flex text-theme-color items-center justify-center pt-32 ">
        
        <div className="Left flex flex-col md:w-[500px] py-4 border shadow-xl rounded ">
          <div className="flex text-3xl font-semibold m-4 gap-3">
           <FontAwesomeIcon className='cursor-pointer' icon={faArrowLeft} onClick={()=>navigate(-1)}/>
            <h1 className=' underline decoration-clone underline-offset-8 decoration-2 decoration-slate-500'>Edit profile</h1>
            </div>
        <div className="flex flex-col mx-3 ml-4 gap-2 mt-2">
            <h1 className='font-medium text-md pl-0.5 text-gray-500 '>Name</h1>
            <input className=" rounded h-10 border-2 border-gray-600 pl-3 active:border-teal-500" defaultValue={user?.displayName} placeholder='Name' onChange={(e)=>(updateUsername(e.target.value))}/>
            <h1 className='font-medium text-md pl-0.5 text-gray-500'>Phone</h1>
            <input className=" rounded h-10 border-2 border-gray-600 pl-3 active:border-teal-500" defaultValue={userDoc?.phonenumber} placeholder='Phone Number' onChange={(e)=>(updatePhoneNumber(e.target.value))}/>
            <h1 className='font-medium text-md pl-0.5 text-gray-500'>Email</h1>
            <input className=" rounded h-10 border-2 border-gray-600 pl-3 active:border-teal-500" defaultValue={userDoc?.email} placeholder='Email' onChange={(e)=>(updateEmail(e.target.value))}/>

            <div className='h-10 w-24 flex self-center mt-5 justify-center items-center bg-green-900 active:bg-teal-500  rounded' onClick={setData}>
              <h1 className='text-white font-semibold cursor-pointer'>Submit</h1>
            </div>
        </div>

        </div>
            </div>
    </div>
  )
}

export default Editprofile
