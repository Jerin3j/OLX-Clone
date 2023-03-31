import './Loading.css'
import React from 'react'
import {ClipLoader} from 'react-spinners'; 

const Loading = () => {
return (
<>
<ClipLoader className=' absolute left-36 md:left-1/2 top-1/2 md:top-1/2 -translate-x-1/2 flex'  size={100} />
</>   )
  }

export default Loading
