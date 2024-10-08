import { Box } from "@mui/material";
import Headline from "../parts/header/Headline";
import { useEffect, useState } from "react";
import { getProductsFromBackend } from "../../utils/AjaxHandler";
import {initialProducts } from "../../data/productsData"; 



export function WelcomePage(){
    /* company as string - example: "company" */
    const company = "company"
    const [products, setProducts] = useState([initialProducts]);
    useEffect (()=>{
        getProductsFromBackend(setProducts);
    },[])
    return(
        <>
        <Box sx={{
            backgroundColor: "background.default"
        }}>
            <div style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                height: "100vh"
            }}>

                <h1 style = {{
                    textAlign:"center",
                    
                }}>
                    Willkommen im E-Shop der Firma {company}
                </h1>
            </div>
        </Box>
        </>
    )
}