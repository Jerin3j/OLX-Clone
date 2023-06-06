import { faBuilding, faEdit } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faBicycle, faBook, faBridgeCircleExclamation, faCarAlt, faDog, faMobileScreen, faNetworkWired, faPersonDress, faRoadSpikes, faTable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{ useContext, useState } from 'react'
import   './Create.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext, FirebaseContext } from '../../Contexts/Context'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import DotLoading from '../../Assets/Loading/DotLoading'


const Create = () => {

  document.title= "OLX | CREATE"
  window.scrollTo(0, 0)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState([])
  const [location, setLocation] = useState("")
  const [load, setLoad] = useState(false)
  const [category, setCategory] = useState()
  const [next, setNext] = useState(false)
  const {user} = useContext(AuthContext)  // Logined user {}
  const app = useContext(FirebaseContext)
  const navigate = useNavigate()
  const storage = getStorage(app)
  const db = getFirestore(app)
  const date = new Date()
  

  function submitCategory (e){
    setCategory(e.target.textContent);
     setNext(!next);
  }
  const upload = (e) => { //File img upload
    const newImage = [...image];
   for (let i = 0; i < e.target.files.length; i++) {
    newImage.push(e.target.files[i]);
   }
  setImage(newImage);

  }
 

  const handleSubmit = async (e) => {
    if (user) {
    setLoad(true)  
    if (image == null) return;
    for (let i = 0; i < image.length; i++) {
      const productsRef = ref( storage, `Products/${user.uid}/${image[i].name}__${category}` );
  
      try {
        const result = await uploadBytes(productsRef, image[i]);
        console.log("Successful upload");
        const url = await getDownloadURL(result.ref);
        await addDoc(collection(db, "Products"), {
          id: user.uid,
          ProductTitle: title,
          Description: desc,
          Price: price,
          Location: location,
          Url: url,
          CreatedAt: date.toDateString().slice(4),
          category,
        });
  
        await Promise.all([setLoad(false)]);
        console.log("done");
        await navigate("/");
      } catch (error) {
        console.error(error);
      }
    }}
   else {
   navigate('/')
   }
   };

  console.log(category)
  return (
    user?
    <div className='CreateProducts flex flex-col items-center mb-20'> 
      <div className="backBtn text-xl gap-4 text-theme-color bg-whitesmoke flex pt-7 pl-7 h-[74px] w-full">
        <FontAwesomeIcon icon={faArrowLeft} onClick={()=>  window.confirm("Are you sure you want to leave? Your progress will not be saved")? navigate(-1):""  }/>
        <h1 className='font-semibold text-xl md:text-2xl -mt-1'>Post Your Ad</h1>
      </div>

        <div className={`ProductTitle ${next? "hidden" :"block"} flex flex-col w-full md:w-[500px] mb-[82px]`}>
          <div className='PostItems md:mt-5  md:w-[500px] border-2 rounded shadow-xl flex flex-col'>
          <h1 className='uppercase text-lg self-center m-5 font-medium underline decoration-clone underline-offset-8 decoration-2 decoration-theme-color'>select a category</h1>
            <ul className=''>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faCarAlt}/>OLX Autos (Cars)</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faBuilding}/>Properties</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faMobileScreen}/>Mobiles</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faRoadSpikes}/>Jobs</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faBicycle}/>Bikes</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faBridgeCircleExclamation}/>Electronics & Appliances</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faBook}/>Books, Sports & Hobbies</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faTable}/>Furniture</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faDog}/>Pets</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faPersonDress}/>Fashion</li>
                <li className='hover:bg-teal-500 text-lg' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faNetworkWired}/>Services</li>
                <li className='hover:bg-teal-500 text-lg' contentEditable='true' onClick={(e)=>submitCategory(e)}><FontAwesomeIcon className='mr-4' icon={faEdit}/>Custom</li>
                </ul>
            </div>
        </div>
        
       {next?
       <div className={`MakeProduct self-center mt-16 ${load?"   " : ""}`}>
        { load?
     <DotLoading/>:null}
           <div className="PostBox flex flex-col  border rounded">
          <div className="CategoryShow flex flex-col">
            <h1 className="font-semibold text-xl md:text-2xl uppercase  mx-5 my-2 self-center">Selected category</h1>
            <div className="flex justify-between  mx-5 mb-1">
              <h1 className="text-md ">Category selected - {category=="Custom" ? title : category}</h1>
              <h1 className="font-semibold underline hover:no-underline cursor-pointer " onClick={()=>setNext(!next)}>Change</h1>
            </div>
            <hr/>
            <div className="PostDetails text-theme-color mx-2 md:mx-5 md:w-[800px]">
              <h1 className='uppercase font-extrabold text-lg md:text-xl mt-10'>Include some brands</h1>
               <div className="flex flex-col">
              <h1 className='font-medium text-md pl-0.5 text-gray-500 '>Ad title *</h1>
               <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="rounded h-10 border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 " required/>
             <h1 className='font-medium text-md pl-0.5 text-gray-500 '>Description *</h1>
              <textarea onChange={(e)=>{setDesc(e.target.value)}} type="text" className="rounded border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 h-36 text-left " />
             <hr/>
             <h1 className='uppercase font-extrabold text-lg md:text-xl '>set a price</h1>
              <h1 className='font-medium text-md pl-0.5 text-gray-500 '>Price *</h1>
               <input onChange={(e)=>{setPrice(e.target.value)}} type="text" className="rounded h-10 border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 " />
                <hr />
                
                <div className="imageInput flex flex-col my-10 justify-around">
                <h1 className='uppercase font-extrabold text-lg md:text-xl'>Upload up to 6 photos</h1>
                <div className="flex gap-4  overflow-x-scroll scroll">
                {image?
                  image.map((img, id)=>(
                  <img src={URL.createObjectURL(img)} key={id} className={"rounded w-44 h-32 my-3" } alt='ProductImge'/>
                         
                  ))
                  
                :null}
                </div>
                  <label className="fileInput w-36 h-10 border-4 flex flex-col items-center active:border-teal-300 border-theme-color rounded  z-30 mx-10  bg-gray-300 cursor-pointer">
                    <span className='cursor-pointer font-semibold text-theme-color'>Upload images</span>
                  <input onChange={upload} max={3} accept=".jpg, .jpeg, .png" type="file"  className='file:rounded-3xl file:text-sm '/>
                  </label>
                </div>

                <hr/>
                <h1 className='uppercase font-extrabold text-lg md:text-xl'>Confirm your location</h1>
                <input onChange={(e)=>{setLocation(e.target.value)}} type="text" className="rounded h-10 border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 w-full md:w-52" />
                <hr/>
                <div className="UserDetails flex flex-col pt-14">
                <h1 className='uppercase font-extrabold text-lg md:text-xl'>Review your details</h1>
                
              <h1 className='font-thin text-md pl-0.5 text-theme-color'>Name</h1>
                <input defaultValue={user?.displayName} type="text" className="rounded h-10 capitalize border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 w-full md:w-52" />
                <div className="my-8 flex flex-col gap-3">
                <h1 className="text-md font-medium underline underline-offset-4 decoration-theme-color decoration-solid">Let's verify your account</h1>
                <h1 className="font-light">We will send you a confirmation code by sms on the next step.</h1>
                <h1 className="font-thin text-theme-color capitalize">Mobile Phone Number*</h1>
                  <input type="text" defaultValue={+91} className="rounded h-10 border border-gray-300 focus:border-teal-400 focus:border-2 pl-3 w-full md:w-52" />
                </div>
                
                </div>
            <button onClick={handleSubmit} className='text-white h-12 w-24 font-semibold rounded self-center mt-4 focus:ring-1 bg-theme-color mb-5'>Confirm</button>
           
              </div>
            </div>
          </div>
        </div>          
       </div>:null
      }
    </div> : (
  alert("Sorry, You are not Logined. Please Log in"),
  navigate('/login'))
  )
}

export default Create
