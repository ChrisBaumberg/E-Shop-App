import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useRef, Fragment } from "react";


export default function ProductCard({title, pictureUrl, description, price, category, size, comparePrice, productSize, id, despositValue
}){
    
    if (despositValue == true){
        var desposit = "(Pfand: 0,25€)"
    }
    else{
        var desposit = ""
    }

    return(
        <Box sx={{
            width: "80vw",
            display: "flex",
            alignItems: "center",
            marginLeft:"5vw"
        }}>
        <Box sx={{
            width: "95vw",
            height: "80vh",
            backgroundColor: "rgb(120, 20, 20, 0.8)",
            display: "grid",
            gridTemplateColumns: "50% 50%"
        }}>
            {/*Product Image*/}
              
                    <img src={pictureUrl} alt= "Produktbild" style={{height: "420px", width: "420px",border: "1px solid black", display: "flex", alignItems:"center",justifyContent: "center",justifySelf:"center", alignSelf:"center"}}></img>
                
           {/* Content */}
            <Box sx={{
                display: "grid",
                gridTemplateRows: "10% 45% 10% 25% 10%",
                backgroundColor: "yellow",
                paddingLeft: "20px",
                paddingTop: "5px"
                //color: "rgb(66, 135, 245)"
            }}>
                <Box sx={{
                   
                    textAlign: "start"
                }}>
                    <h1>{title}</h1>
                </Box>
                <Box sx={{
                    marginTop: "10px",
                    textAlign: "start",
                    color: "blueViolet"
                }}>
                    {description}
                    </Box>
                <Box sx={{
                    textAlign: "start"
                }}>
                    Größe: {size}{productSize}<br/>
                    <span style={{fontSize:"24px"}}>{price} €</span>{desposit}<br/>
                    ({comparePrice} €/{productSize})
                    <br/>
                    <span style={{fontSize:"12px"}}>inkl. 19% MwSt., zzgl. Versandkosten</span> {/* optional */}
                </Box>
                <Box sx={{
                    
                }}>
                    <input type="number" id="productCount" style={{width: "40px", }} min= "1" max= "15" placeholder={1} ></input> 
                    <Button sx={{
                        width: "250px", backgroundColor: "red", color: "yellow", marginLeft: "20px"
                    }}>In den Warenkorb</Button>
                </Box>
                <Box>
                     {/* Placeholder */}
                </Box>
            </Box>
        </Box>
        </Box>
    )
}