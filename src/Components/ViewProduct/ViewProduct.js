import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useContext,useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../Contexts/Context'
import { ProductContext } from '../../Contexts/ProductContext'
import './ViewProduct.css'

const ViewProduct = () => {

  const  {productDetails} = useContext(ProductContext)
  const [userDetails, setuserDetails] = useState('')
  const navigate = useNavigate();
  const  app = useContext(FirebaseContext)
  const db = getFirestore(app);

    useEffect(()=>{
     ( async ()=>{
      const userColl =  collection(db, 'Users')
      const userData=  await getDocs(query(userColl, where("id", "==", productDetails?.id)))
      userData.forEach((doc) => (
        setuserDetails(doc.data())  // set product owner details
      ))

     })().catch((er)=>{
      console.log(er.message);
     })
    },[])
  
    console.log(productDetails);

  return (
    productDetails ?
    <div className='DisplayProduct'>
        <div className='YourProduct bg-whitesmoke py-32 flex justify-center gap-10'>

            <div className='Product-one flex flex-col gap-0.5'>
            <div className='ProductPic w-[800px] flex justify-center h-[500px] border-2 border-gray-300 bg-black rounded'>
              <img className='self-center h-full w-[400px]' src={productDetails?.Url} />
            </div>
            <div className='ProductImgss h-[70px] w-[800px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
             <img className='w-14 h-14' src={productDetails?.Url}/>
             </div>
             <div className='ProductDesc h-[100px] w-[800px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
             <h1 className='font-semibold text-2xl text-theme-color '>Description</h1>
             <p className='text-theme-color font-light'>{productDetails?.Description}</p>
             </div>
             <div className='RelatedProducts  h-[200px] w-[800px] border-2 border-gray-300 bg-white rounded pl-4 flex'>

             </div>
           </div>

            <div className='ProductDetails flex flex-col gap-2 '>
              <div className='ProductName w-[390px] h-[170px] border-2 border-gray-300 bg-white rounded self-start pl-4 flex flex-col justify-evenly'>
                <h1 className='font-semibold text-2xl text-theme-color '>{"₹ "+productDetails?.Price}</h1>
                 <p className='text-theme-color text-lg'>{productDetails?.ProductTitle}</p>
                 <p className='text-theme-color text-lg'>{productDetails?.category}</p>
                <div className='locationAndDate  uppercase text-gray-600 flex gap-64'>
                    <h1 className='truncate text-[10px]'>{productDetails?.Location}</h1>
                    <h1 className=' text-[10px]'>{productDetails?.CreatedAt}</h1>
                    </div> 
              </div>
              <div className='SellerName w-[390px] h-[170px] border-2 border-gray-300 bg-white marker:rounded pl-4 flex flex-col'>
                <h1 className='font-semibold text-2xl text-theme-color underline underline-offset-4'>Seller Details</h1>
                 <p className='text-theme-color font-medium text-lg '>{"Name :   "+userDetails.username}</p>
                 <p className='text-theme-color font-medium text-lg '>{"Phone Number :  "+userDetails.phonenumber}</p>
                 <p className='text-theme-color font-medium text-lg '>{"Email :  "+userDetails.email}</p>
               </div>
              <div className='PostLocation w-[390px] h-[140px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
                <h1 className='font-semibold text-2xl text-theme-color '>Posted in</h1>
                <h1 className='truncate text-[13px] uppercase text-gray-600'>{productDetails?.Location}</h1>
               </div>
            </div>
        </div>
      
    </div>
    : navigate(-1)
  )
}

export default ViewProduct
