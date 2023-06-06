import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, FirebaseContext } from '../../Contexts/Context'
import { collection, doc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import {  FaCameraRetro } from "react-icons/fa";

const Editprofile = () => {

  document.title= "OLX | EDIT PROFILE"

    const [username, updateUsername] = useState('')
    const [phonenumber, updatePhoneNumber] = useState('')
    const [email, updateEmail] = useState('')
    const [image, setImage] = useState('')
    const [userDoc, setUserDoc] = useState([])
    const [docId, getDocId] = useState()
    const {user} = useContext(AuthContext)  // Logined user {}
    const app = useContext(FirebaseContext)
    const auth = getAuth(app)
    const db = getFirestore(app)
    const storage = getStorage(app)
    const navigate = useNavigate();
    
    console.log(image);
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

      const productsRef = ref( storage, `Profiles/${user.uid}`);
      const result = await uploadBytes(productsRef, image);
      console.log("Successful upload");
      const url = await getDownloadURL(result.ref)
        console.log("url", url);
          await updateProfile(auth.currentUser, {displayName: username}).then(async()=>{
          console.log("updated");
          alert("updated");
          const docRef = await doc(db, `Users/${docId}`)
          await updateDoc(docRef,{
            username,
            phonenumber,  //if  usernam ? updated  do update in firestore
            email,
            profileUrl: url,
          }).catch((err)=>{
            console.log(err.message);
          })
  
        }).catch((error) => {
          console.log("updatePF : "+error.message);
        })   
    }
  return (
    <div className='Editprofile '>
      <div className="flex text-theme-color items-center justify-center md:py-28 z-50 mb-[72px]">
        
        <div className="Left flex flex-col w-full md:w-[500px]  py-4 border shadow-xl rounded ">
          <div className="flex text-3xl font-semibold m-4 gap-3">
            <h1 className=' underline decoration-clone underline-offset-8 decoration-2 decoration-slate-500'>Edit profile</h1>
            </div>
        <div className="Edit flex-col mx-3 ml-4 gap-2 ">
          <div className='profileEdit flex flex-col md:flex-row items-center gap-2'>
          <div className='ProfilePic'>
            <div className='rounded-full drop-shadow-xl border-2 h-24 w-24 md:h-32 md:w-32 bg-gray-500 flex flex-col items-center justify-center '>
            <img src={userDoc?userDoc.profileUrl: URL.createObjectURL(image)} className='rounded-full shadow-inner shadow-gray-900 absolute h-24 w-24 md:h-32 md:w-32 flex flex-col items-center justify-center opacity-6' alt='profile pic' />

              <FaCameraRetro className='h-4 w-4 md:h-14 md:w-14 z-40 '/>
              <span className='text-theme-color text-sm md:text-lg font-medium md:font-semibold z-20 '>Add picture</span>
              <input onChange={(e)=>setImage(e.target.files)} className='text-transparent cursor-pointer h-14 w-14 md:h-32 md:w-32 rounded-full absolute z-40' type={'file'} max='1' accept='.png, .jpg,'/>
            </div>
          </div>
          <div className='ProfileDetails flex flex-col mx-3 ml-4 gap-2 mt-2'>
            <h1 className='font-medium text-lg pl-0.5 text-gray-500 '>Name</h1>
            <input className=" rounded h-14 border-2 border-gray-600 pl-3 active:border-teal-500" defaultValue={user?.displayName} placeholder='Name' onChange={(e)=>(updateUsername(e.target.value))}/>
            <h1 className='font-medium text-lg pl-0.5 text-gray-500'>Phone</h1>
            <input className=" rounded h-14 border-2 border-gray-600 pl-3 active:border-teal-500" defaultValue={userDoc?.phonenumber} placeholder='Phone Number' onChange={(e)=>(updatePhoneNumber(e.target.value))}/>
            <h1 className='font-medium text-lg pl-0.5 text-gray-500'>Email</h1>
            <input className=" rounded h-14 border-2 border-gray-600 pl-3 active:border-teal-500" defaultValue={userDoc?.email} placeholder='Email' onChange={(e)=>(updateEmail(e.target.value))}/>
            </div>
            </div>
            <div className='Btns flex justify-between px-8'>
              <h1 onClick={()=>navigate(-1)} className=' font-medium mt-10 text-xl cursor-pointer text-theme-color border-green-90 underline underline-offset-8'>Discard</h1>
            <div className='SaveBtn h-12 md:h-14 w-28 md:w-32 flex self-center mt-8 justify-center items-center bg-theme-color active:bg-teal-500  rounded' onClick={setData}>
              <h1 className='text-white font-semibold md:text-lg cursor-pointer'>Save Changes</h1>
            </div>
            </div>
        </div>

        </div>
            </div>
    </div>
  )
}

export default Editprofile
