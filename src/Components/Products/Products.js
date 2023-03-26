import React, { useContext, useState, useEffect} from 'react'
import HeartIcon from '../../Assets/HeartIcon'
import './Products.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FirebaseContext } from '../../Contexts/Context'
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { ProductContext } from '../../Contexts/ProductContext'
import { useNavigate } from 'react-router-dom'


const Products = () => {
  const [productData, setProductData] = useState([])
  const app = useContext(FirebaseContext)
  const db = getFirestore(app)
  const {setProductDetails} =useContext(ProductContext);
  const navigate = useNavigate();

  
    useEffect(()=>{
     const getUsersData=async()=>{
      try{
      const q =  query(collection(db, 'Products'))
      const ProductsQuery = await getDocs(q)
     const products = ProductsQuery.docs.map((doc)=>doc.data()
      )
      setProductData(products)
      } catch(er){
        console.log(er);
      }
     }   
   getUsersData()

   },[])
   
   const showFav=(props)=>{
    toast(props+" Added to favorites")
   }
  return (
    <div className='Products'>
      <div className='flex flex-col mt-16 md:mt-32 relative'>
      <h1 className='place-self-center flex -ml-40 sm:-ml-[430px] md:-ml-[950px] text-sm md:text-2xl'>Fresh recommendations</h1>
        <ul className='Allproducts pt-4 ml-4 sm:ml-0 flex  flex-wrap items-center content-start justify-center'>
            {
                productData.map((product)=>(
              <li className='productBox mr-3.5 mb-3 md:w-72 md:h-[268px] w-5/12  border border-slate-300 rounded relative '>
              <div onClick={()=>{setProductDetails(product); navigate('/viewProduct');}}  className='ItemPicture flex justify-center h-36'>
               <img className=' md:left-10  min-h-full max-h-full max-w-full ' src={product.Url||"https://opencollective.com/react-toastify/organization/0/avatar.svg"} alt={product.title}/>
                </div>
                  <div className='ItemText flex flex-col justify-between'>
                    {product.Price>=1000 ? <label>
                   <span className='absolute top-4 z-10 px-1 py-0.5 h-5 text-[10px] md:text-xs font-bold md:font-medium uppercase bg-yellow-400'>featured</span>
                     </label>:null}
                    <span className='text-2xl mt-3 text-theme-color font-semibold truncate'>{product.ProductTitle||<Skeleton/>}</span>  
                    <span className='text-base text-theme-color font-semibold'>{"₹ "+product.Price}</span>
                    <span className='truncate  text-sm text-gray-500 font-normal'>{product.Description||<Skeleton/>}</span>
                    <div className='mt-1 uppercase text-gray-600 flex justify-between'>
                    <span className='truncate text-[10px]'>{product.Location||<Skeleton/>}</span>
                    <span className='hidden md:block text-[10px]'>{product.CreatedAt||<Skeleton/>}</span>
                    </div>
                    <span onClick={()=>showFav(product.ProductTitle)} className='absolute right-0 md:right-1 top-4 cursor-pointer fill-gray-400 active:fill-pink-600 '>
                    <HeartIcon/>
                  </span>
                  </div>
              </li> 
              ))
              }
              <li className='productBox mr-3.5 mb-3 md:w-72 md:h-[263px] w-5/12  border border-slate-300 rounded relative '>
              <div className='ItemPicture flex justify-center h-36'>
                  <img className=' md:left-10  min-h-full max-h-full max-w-full ' src='https://apollo-singapore.akamaized.net/v1/files/4og1a1ccffpm3-IN/image;s=300x600;q=60' alt='Product_Image'/>
                  </div>
                  <div className='ItemText flex flex-col justify-between'>
                    <label>
                   <span className='absolute top-4 z-10 px-1 py-0.5 h-5 text-[10px] md:text-xs font-bold md:font-medium uppercase bg-yellow-400'>featured</span>
                   </label>
                    <span className='text-2xl mt-3 text-theme-color font-semibold'>₹ 13,500</span>
                    <span className='truncate mt-2 text-sm text-gray-500 font-normal'>Brand new apple mobiles on Rent and Emi 14 pro, 14 pro max and etc</span>
                    <div className='mt-4 uppercase text-gray-600 flex justify-between'>
                    <span className='truncate text-[10px]'>Bangalore Airport Area, Bengaluru</span>
                    <span className='hidden md:block text-[10px]'>Today</span>
                    </div>
                    <span className='absolute right-0 md:right-1 top-4 cursor-pointer fill-current active:fill-red-500 '>
                    <HeartIcon/>
                  </span>
                  </div>
              </li>
            </ul>
            <ToastContainer hideProgressBar={true} position="bottom-center" theme='dark' limit={1} />
           <div className='self-center -translate-x-2/4 Button cursor-pointer border-2 hover:border-4 border-theme-color h-10 w-28 ml-40 flex items-center justify-center rounded'>
          <h1 className='text-theme-color font-medium'>Load More</h1>
        </div>
        </div>
       
      </div>
  )
}

export default Products