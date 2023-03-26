import { createContext,useState } from "react";


export const ProductContext = createContext()

 function Post({children}){

  const [productDetails, setProductDetails] = useState()

 return(
    
   <ProductContext.Provider value={{productDetails, setProductDetails}}>
       {children}
   </ProductContext.Provider>
 )
}

export default Post;