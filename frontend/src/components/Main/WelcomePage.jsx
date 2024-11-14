import { Box } from "@mui/material";

import { useEffect, useState } from "react";
import { getProductsFromBackend } from "../../utils/AjaxHandler";
import {initialProducts } from "../../data/productsData"; 



export function WelcomePage(){
    /* company as string - example: "company" */
    const company = "company"
    const [products, setProducts] = useState();
    useEffect (()=>{
        getProductsFromBackend(setProducts);
    },[])
    return(
        <Box sx={{
            display: "grid",
            gridTemplateRows: "10% 90%",
            height: "100vh",
            gap: "10px"
        }}>

        <Box sx={{
            
            alignItems: "center",
            justifyContent: "center",
            
            }}>
         

                <h1 style = {{
                    textAlign:"center",
                    
                }}>
                    Willkommen im E-Shop von {company}
                </h1>
      
        </Box>
        <Box sx={{
           
            height: "100%"
        }}>
            <h2 style={{
                textAlign:"center",
            }}>
                Unsere Empfehlungen:
            </h2>
        </Box>
        </Box>
    )
}