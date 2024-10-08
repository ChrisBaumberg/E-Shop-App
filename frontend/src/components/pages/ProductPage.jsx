import { Box, Button } from "@mui/material";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function ProductPage({title, imageUrl, description, price, category, size, comparePrice, productSize
}){
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

            {/* Produktbild */}
            <Box sx={{
                width: "100%",
                height: "100%",
                
            }}>
            <img src={imageUrl} style={{
                display: "flex",
                flex: 1,
                width: "100%",
                height: "100%",
                justifySelf: "center",
                borderRadius: "10px",
                boxShadow:"1px 1px 10px 1px rgb(73, 74, 133)",//*2
                border: "1px solid black",//*2
                
            }}
            alt="Produktbild"/>
            </Box>
                <Box sx={{
                    height: "100%",
                    textAlign: "center",
                    fontFamily: "Arial",
                    flex: 1,                }}
               >
               <h2>{title}</h2>
               {productSize}{size}
                </Box>
                
                <Box sx={{
                    height: "80%",
                    color: "red",
                    flex: 1,
                    marginTop: "10px",
                    marginBottom:"5px",
                    //borderTop: "1px solid red", //*1
                  // backgroundColor: "orange",
                    textAlign: "center"
                    
                }}>
                     {price} <span style={{ fontSize: "12px"}}>{desposit}</span> <br/>
                    1{size}: {comparePrice}
                    
                </Box>
            
                
        </Box>
        
        </>
    )
}

//Variante 1: border für die ganze ProductCard
//Variante 2: border und boxShadow für das Produktbild