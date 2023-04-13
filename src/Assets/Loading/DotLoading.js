import React from 'react'

const DotLoading = () => {
  return (
    <>
<div class="fixed z-50 flex touch-pan-y top-0 left-0 w-full h-full bg-black/[.3] "></div>
  <div aria-label="Loading..." role="status">
    <svg class="h-20 w-20 md:h-40 md:w-40 animate-spin stroke-black absolute left-40 md:left-1/2 top-1/2 z-50" viewBox="0 0 256 256">
      <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
      <line
        x1="195.9"
        y1="60.1"
        x2="173.3"
        y2="82.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"></line>
      <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
      <line
        x1="195.9"
        y1="195.9"
        x2="173.3"
        y2="173.3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"></line>
      <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
      <line
        x1="60.1"
        y1="195.9"
        x2="82.7"
        y2="173.3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"></line>
      <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
      <line
        x1="60.1"
        y1="60.1"
        x2="82.7"
        y2="82.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"></line>
    </svg>
  </div>
   
  </>
    )
}

export default DotLoading
