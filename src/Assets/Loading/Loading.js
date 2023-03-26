import './Loading.css'
import React from 'react'
import {ClipLoader} from 'react-spinners'; 

const Loading = () => {
return (
    <ClipLoader className='absolute left-28 md:left-1/2 top-48 md:top-96 -translate-x-1/2 '  size={150} />
   )
  }

export default Loading
