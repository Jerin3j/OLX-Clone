import { collection, deleteDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeartIcon from '../../Assets/HeartIcon'
import { AuthContext, FirebaseContext } from '../../Contexts/Context'
import { toast,ToastContainer } from "react-toastify";
import { FaSearch } from 'react-icons/fa'

const Favorite = () => {
    document.title ="OLX | FAVORITES"
    
  const [favorites, setFavorites] = useState([])
  const {user} = useContext(AuthContext)
  const app = useContext(FirebaseContext);
  const navigate = useNavigate()
  const db = getFirestore(app);
  const favoritesColl = collection(db, "Favorites")

    useEffect(()=>{
      (async()=>{
        const favQuery = query(favoritesColl, where("FavId", "==", user?.uid))
        const favDocs = await getDocs(favQuery)
        const favProducts = favDocs.docs.map((doc) => (doc.data()));
        setFavorites(favProducts)
    })()
    }, [db, user?.uid])
    
    const removeFavorite =async (doc)=>{
      const favQuery = query(favoritesColl, where("Url", "==", doc?.Url))
        const favDocs = await getDocs(favQuery)
        favDocs.forEach(async(doc)=>(
         await deleteDoc(doc.ref),
          navigate(0)
        ))
        toast(doc.ProductTitle+"  Removed from favorites")
    }


  return (
    
    <div className='Favorites flex flex-col '>
        <div className='ProductsContainer flex flex-col items-center my-5 md:my-10 h-screen overflow-y-scroll drop-shadow-2xl'>
      { 
      favorites.length?(
          favorites.map((doc) => (
      <div key={doc.Price} className='FavoriteProduct relative w-[380px] md:w-[900px] flex self-center gap-1 md:gap-8 px-4 py-5 my-2 md:my-5 md:px-8 md:py-10 border-2 border-gray-300 rounded '>
        <div className='productImg'>
            <img className='h-20 w-24 md:h-32 md:w-44 rounded' src={doc.Url}/>
        </div>
        <div className='ProductDetails text-theme-color flex flex-col '>
            <h1 className='text-xl md:text-3xl font-medium'>{doc.ProductTitle}</h1>
            <h1 className='text-base md:text-xl font-extralight'>{doc.Description}</h1>
            <h1 className='text-sm font-normal'>{doc.Location}</h1>
        </div>
        <span onClick={()=>removeFavorite(doc)} className='absolute  right-5 -mt-2 md:-mt-5 fill-red-400  cursor-pointer'>
            <HeartIcon/>
        </span>
      </div>))):(
           <div className='text-theme-color flex flex-col justify-center items-center'>
            <FaSearch className='text-3xl md:text-7xl font-semibold'/>
             <h1 className='text-lg md:text-2xl font-semibold'>Sorry, You dont have any favorites</h1>
           </div>)
      }
       </div> 
       <ToastContainer hideProgressBar={true} position="bottom-center" theme='dark' limit={1} />

    </div> 
  )
}

export default Favorite
