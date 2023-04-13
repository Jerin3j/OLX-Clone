import React from 'react'

const Loading = () => {
return (
<div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
   <div class="animate-spin rounded-full h-24 w-24 md:h-36 md:w-36 border-t-2 border-b-2 border-theme-color"></div>
</div>
  )
  }

export default Loading
