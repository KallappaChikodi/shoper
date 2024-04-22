import { createContext } from "react";
import all_products from "../components/assets/all_product.js"

export const ShopContext=createContext(null);

const ShopContexProvider=(props)=>{
    const contextValue={all_products};
   return(
    <>
     <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>

    </>
   )
}
export default ShopContexProvider;