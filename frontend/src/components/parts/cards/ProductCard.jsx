import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useRef } from "react";


export default function ProductCard({title, imageUrl, description, price, category, size, comparePrice, productSize, despositValue
}){

    
   

    return(
     
            <Box sx={{
            width: "200px",
            
            backgroundColor: "rgb(120, 20, 20, 0.8)",
            display: "grid",
          
            gridTemplateRows: "30% 70%"
        }}>
            <Box sx={{
                width: "100%",
                backgroundColor: "yellowgreen",
                //height: "100%",
                display:"flex", justifyContent: "center", alignItems: "center"
            }}>
                <img src={imageUrl} alt= "Produktbild" style={{height: "420px", width: "420px",}}></img>
            </Box>
            <Box sx={{
                display: "grid",
                gridTemplateRows: "20% 10% 20% 10% 40%",
                backgroundColor: "yellow",
                paddingLeft: "20px",
                color: "rgb(66, 135, 245)"
            }}>
                <Box sx={{
                    textAlign: "start"
                }}>
                    <h2>{title}</h2>
                </Box> <br/>
                <Box sx={{
                    textAlign: "start",
                    color: "blueViolet",
                    fontSize: "16px"
                }}>
                    {description}
                    </Box>
                <Box sx={{
                    textAlign: "start",
                    fontSize: "16px"
                }}>
                    Größe: {productSize}{size}<br/>
                    <span style={{fontSize:"24px"}}>{price} €</span> <br/><span style={{fontSize: "12px"}}>zzgl. Pfand: {despositValue}€</span><br/>
                    <span style={{fontSize: "12px"}}>({comparePrice} €/{size})</span>
                   
                </Box>
                
                <Box>
                     {/* Placeholder */}
                </Box>
            </Box>
        </Box>
    )
}