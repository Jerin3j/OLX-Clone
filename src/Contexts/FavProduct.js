import { createContext,useState } from "react";

export const FavContext = createContext()


 function Favorites({children}){

  const [favDetails, setFavDetails] = useState()

 return(
    
   <FavContext.Provider value={{favDetails, setFavDetails}}>
       {children}
   </FavContext.Provider>
 )
}

export default Post;