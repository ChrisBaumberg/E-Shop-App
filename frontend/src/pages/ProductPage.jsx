import { Box, Button } from "@mui/material";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Fragment, useEffect, useState } from "react";
import {getProductsFromBackend} from "../utils/AjaxHandler";
import ProductCard from "../components/parts/cards/ProductCard";
import {v4 as uuidv4} from "uuid";
import { initialProducts } from "../data/productsData";


export default function ProductPage(){
    const [products, setProducts] = useState(
        initialProducts
    );

        useEffect(()=>{
            getProductsFromBackend(setProducts);
        },[])
  
    
    return(
        <>
    
        <Box sx={{
            height: "45vh",
            width: "200px",
            backgroundColor: "rgb(196, 194, 114, 0.5)",
            display: "grid",
            gridTemplateRows: "50% 35% 14% ",
            float: "left",
            marginRight: "20px",
            marginBottom: "5px",
            gap: "2px",
            borderRadius: "10px",
            //border: "1px solid black" //*1
        }}>

           
                <Box sx={{
                    height: "100%",
                    textAlign: "center",
                    fontFamily: "Arial",
                    flex: 1,                }}
               >
                {products.map((product)=>{
                    return(
                        <Fragment key={product.id}>
                            <ProductCard id={product.id} pictureUrl={product.pictureUrl} title={product.title} description={product.description} price={product.price} size={product.size} comparePrice={product.comparePrice} productSize={product.productSize} category={product.category} despositValue={product.despositValue}/>
                        </Fragment>
                    )
                })}
                    
                </Box>
            
                
        </Box>
        
        </>
    )
}

//Variante 1: border für die ganze ProductCard
//Variante 2: border und boxShadow für das Produktbild