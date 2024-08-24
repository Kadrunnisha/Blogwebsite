import { createContext, useState } from "react";
import React from "react";
 export const createContexts=createContext(null);
 export const CartProvider=(props)=>{
    const [mail,setmail]=useState(null);
    
    return(
        <createContexts.Provider value={{mail,setmail}}>
              {props.children}
        </createContexts.Provider>
            
        
    )
 }