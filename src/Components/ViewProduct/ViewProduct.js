import { addDoc, collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useContext,useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import HeartIcon from '../../Assets/HeartIcon'
import { AuthContext, FirebaseContext } from '../../Contexts/Context'
import { ProductContext } from '../../Contexts/ProductContext'
import './ViewProduct.css'

const ViewProduct = () => {

  const  {productDetails} = useContext(ProductContext)
  const {user} = useContext(AuthContext)
  const [userDetails, setuserDetails] = useState('')
  const [like, setLike] = useState(false)
  const [relatedPost, setRelatedPost] = useState([])
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
  
    useEffect(()=>{
      const relatedPosts =async()=>{
      const PostColl =  collection(db, 'Products')
      const PostData=  query(PostColl, where("id", "==", user?.uid))
      const PostDatas =await getDocs(PostData)
       const Posts = PostDatas.docs.map(doc=>(doc.data()))
       setRelatedPost(Posts);
      }
      relatedPosts()
    }, [])

    const handleFavorite= async(product)=>{
      setLike(true)
      toast(product.ProductTitle +" Added to favorites")
       await addDoc(collection(db, "Favorites"),{
        FavId: user.uid,
        ...product,
       })
      
    }
  


  return (
    productDetails ?
    <div className='DisplayProduct'>
        <div className='YourProduct bg-whitesmoke py-32 flex justify-center gap-10'>

            <div className='Product-one flex flex-col gap-0.5'>
            <div className='ProductPic relative w-[800px] flex justify-center h-[500px] border-2 border-gray-300 bg-black rounded'>
              <img className='self-center h-full w-[400px]' src={productDetails?.Url} />
              <span onClick={()=>handleFavorite(productDetails)} className={`absolute right-5 top-4 ${like? 'fill-red-400' : "fill-gray-300 "}  cursor-pointer`}>
            <HeartIcon/>
             </span>
            </div>
            <div className='ProductImgss h-[70px] w-[800px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
             <img className='w-14 h-14' src={productDetails?.Url}/>
            </div>
             <div className='ProductDesc h-[100px] w-[800px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
             <h1 className='font-semibold text-2xl text-theme-color '>Description</h1>
             <p className='text-theme-color font-light'>{productDetails?.Description}</p>
             </div>
             <div className='RelatedProducts  h-[200px] w-[800px] border-2 border-gray-300 bg-white rounded pl- flex overflow-x-scroll '>
              {relatedPost.map((post)=>( 
              <div className='Post ml-4'>
                <img className='k h-[100px] w-[900px]' src={post.Url}/>
                <h1 className='truncte'>{post.ProductTitle}</h1>
              </div>))
              }
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
            <ToastContainer hideProgressBar={true} position="bottom-center" theme='dark' limit={1} />

        </div>
      
    </div>
    : navigate(-1)
  )
}

export default ViewProduct
