import { addDoc, collection, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'
import React, { useContext,useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { RWebShare } from 'react-web-share'
import HeartIcon from '../../Assets/HeartIcon'
import ShareIcon from '../../Assets/ShareIcon'
import { AuthContext, FirebaseContext } from '../../Contexts/Context'
import { ProductContext } from '../../Contexts/ProductContext'

const ViewProduct = () => {

  
  const  {productDetails} = useContext(ProductContext) // to take user click to view product
  const {setProductDetails} =useContext(ProductContext) //for viewing related posts on viewproduct page
  const {user} = useContext(AuthContext)
  const [userDetails, setuserDetails] = useState('')
  const [like, setLike] = useState(false)
  const [relatedPost, setRelatedPost] = useState([])  
  const navigate = useNavigate();
  const  app = useContext(FirebaseContext)
  const db = getFirestore(app);
  
  document.title= `OLX | ${productDetails.ProductTitle.toUpperCase()}`
  window.scrollTo(0, 0)

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
    },[db, productDetails])
  
    useEffect(()=>{
      const relatedPosts =async()=>{
      const PostColl =  collection(db, 'Products')
      const PostData=  query(PostColl, where("id", "==", productDetails?.id), limit(6))
      const PostDatas =await getDocs(PostData)
       const Posts = PostDatas.docs.map((doc)=>doc.data())
       setRelatedPost(Posts);
      }
      relatedPosts()
    }, [db, productDetails])
    console.log(relatedPost);

    const handleFavorite= async(product)=>{
      if(user){
        setLike(true)
      toast(product.ProductTitle +" Added to favorites")
       await addDoc(collection(db, "Favorites"),{
        FavId: user.uid,
        ...product,
       })}else {
       navigate('/login')}
      
    }

  return (
     productDetails ?
    <div className='DisplayProduct'>
      {/* Desktop screen */}
        <div className='hidden lg:flex bg-whitesmoke py-32  justify-center gap-10'>

            <div className='Product-one flex flex-col gap-0.5'>
            <div className='ProductPic relative w-[800px] h-[500px] flex justify-center border-2 border-gray-300 bg-black rounded-md'>
              <img className='self-center h-full w-[400px]' src={productDetails?.Url} alt={productDetails?.ProductTitle} />
            </div>
            <div className='ProductImgss h-[70px] w-[800px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
             <img className='w-14 h-14 rounded' src={productDetails?.Url} alt={productDetails?.ProductTitle}/>
            </div>
             <div className='ProductDesc h-[100px] w-[800px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
             <h1 className='font-semibold text-2xl text-theme-color '>Description</h1>
             <p className='text-theme-color font-light'>{productDetails?.Description}</p>
             </div>
             <div className='RelatedProducts h-[200px] w-[800px] border-2 border-gray-300 bg-white rounded pl- flex flex-col justify-start '>
             <h1 className='text-lg font-semibold ml-3'>Related Ads</h1>
                <div className='flex  overflow-x-scroll'>
                {relatedPost.map((post)=>( 
              <div className='Post ml-4 overflow-hidden border border-gray-200 rounded'>
                <img onClick={()=>{setProductDetails(post); navigate('/viewProduct');}} className='h-[100px] w-[200px] rounded-lg' src={post.Url} alt={productDetails?.ProductTitle}/>
                <h1 className='truncate font-medium'>{post.ProductTitle}</h1>
              </div>))}
              </div>
              
             </div>
           </div>

            <div className='ProductDetails flex flex-col gap-2 '>
              <div className='ProductName w-[390px] h-[170px] border-2 border-gray-300 bg-white rounded self-start pl-4 flex flex-col justify-evenly'>
                <div className='LikeShare flex relative'>
                <h1 className='font-semibold text-3xl text-theme-color relative'>{"₹ "+productDetails?.Price}</h1>
                   <div className='icons absolute right-3 top-2 flex gap-2'>
                    <RWebShare
                      data={{
                        text: productDetails.ProductTitle,
                        url: 'olx-clone-reactt.web.app',
                        title: productDetails.Description,
                      }} onClick={()=>console.log("shared successfully!")}>
                    <button  className='focus:fill-teal-600  '>
                      <ShareIcon/>
                    </button>
                    </RWebShare>
                     <span onClick={()=>handleFavorite(productDetails)} className={` fill-theme-color ${like? 'fill-red-400' : "fill-theme-color "}  cursor-pointer`}>
                      <HeartIcon/>
                     </span>
                   </div>
                </div>
                 <p className='text-theme-color text-xl'>{productDetails?.ProductTitle}</p>
                 <p className='text-theme-color text-xl'>{productDetails?.category}</p>
                <div className='locationAndDate  uppercase text-gray-600 flex gap-64'>
                    <h1 className='truncate text-[10px]'>{productDetails?.Location}</h1>
                    <h1 className=' text-[10px]'>{productDetails?.CreatedAt}</h1>
                    </div> 
              </div>
              <div className='SellerName w-[390px] h-[170px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly '>
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
        {/* Mobile Screen */}
        <div className='flex md:hidden YourProduct bg-whitesmoke  md:py-32  flex-col md:flex-row justify-center gap-10'>

            <div className='Product-one flex flex-col gap-0.5'>
            <div className='ProductPic relative w-full md:w-[800px] h-[200px] md:h-[500px] flex justify-center border-2 border-gray-300 bg-black rounded-md'>
              <img className='self-center h-full w-[300px] md:w-[400px]' src={productDetails?.Url} alt={productDetails?.ProductTitle}/>
            </div>
            <div className='ProductImgss h-[70px] w-full md:w-[800px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
             <img className='w-14 h-14 rounded' src={productDetails?.Url} alt={productDetails?.ProductTitle}/>
            </div>

            <div className='ProductName w-full md:w-[390px] h-32 md:h-[170px] border-2 border-gray-300 bg-white rounded self-start pl-4 flex flex-col justify-evenly'>
                <div className='LikeShare flex relative'>
                <h1 className='font-semibold text-2xl text-theme-color relative'>{"₹ "+productDetails?.Price}</h1>
                   <div className='icons absolute right-3 top-2 flex gap-2'>
                   <RWebShare
                      data={{
                        text: productDetails.ProductTitle,
                        url: 'olx-clone-reactt.web.app',
                        title: productDetails.Description,
                      }} onClick={()=>console.log("shared successfully!")}>
                    <button  className='focus:fill-teal-600  '>
                      <ShareIcon/>
                    </button>
                    </RWebShare>
                    
                     <span onClick={()=>handleFavorite(productDetails)} className={` fill-theme-color ${like? 'fill-red-400' : "fill-theme-color "}  cursor-pointer`}>
                      <HeartIcon/>
                     </span>
                   </div>
                </div>
                 <p className='text-theme-color text-base md:text-2xl'>{productDetails?.ProductTitle}</p>
                 <p className='text-theme-color text-base md:text-2xl'>{productDetails?.category}</p>
                <div className='locationAndDate  uppercase text-gray-600 flex gap-64'>
                    <h1 className='truncate text-[10px]'>{productDetails?.Location}</h1>
                    <h1 className=' text-[10px]'>{productDetails?.CreatedAt}</h1>
                    </div> 
              </div>

             <div className='ProductDesc h-[100px] w-full md:w-[800px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
             <h1 className='font-semibold text-xl md:text-2xl text-theme-color '>Description</h1>
             <p className='text-theme-color font-light'>{productDetails?.Description}</p>
             </div>
             <div className='SellerName w-full md:w-[390px] h-32 md:h-[170px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly md:justify-start'>
                <h1 className='font-semibold text-xl md:text-2xl text-theme-color underline underline-offset-4'>Seller Details</h1>
                 <p className='text-theme-color font-medium text-base md:text-lg '>{"Name :   "+userDetails.username}</p>
                 <p className='text-theme-color font-medium text-base md:text-lg '>{"Phone Number :  "+userDetails.phonenumber}</p>
                 <p className='text-theme-color font-medium text-base md:text-lg '>{"Email :  "+userDetails.email}</p>
               </div>
             <div className='RelatedProducts md:h-[200px] w-full md:w-[800px] border-2 border-gray-300 bg-white rounded flex flex-col justify-start overflow-scroll scroll whitespace-nowrap '>
             <h1 className='text-lg font-semibold ml-3'>Related Ads</h1>
                <div className='flex overflow-scroll scroll whitespace-nowrap'>
                {relatedPost.map((post)=>( 
              <div className='Post ml-4'>
                <img className='h-24 md:h-[100px] md:w-[200px] rounded-lg' src={post.Url} alt={post.ProductTitle}/>
                <h1 className='md:truncate font-medium'>{post.ProductTitle}</h1>
              </div>))}
              </div>
              
             </div>
           </div>
              <div className='PostLocation w-full md:w-[390px] h-28 md:h-[140px] border-2 border-gray-300 bg-white rounded pl-4 flex flex-col justify-evenly'>
                <h1 className='font-semibold text-xl md:text-2xl text-theme-color '>Posted in</h1>
                <h1 className='truncate text-[13px] uppercase text-gray-600'>{productDetails?.Location}</h1>
               </div>
            <ToastContainer hideProgressBar={true} position="bottom-center" theme='dark' limit={1} />

        </div>
      
    </div>
    : navigate(-1)
  )
}

export default ViewProduct
