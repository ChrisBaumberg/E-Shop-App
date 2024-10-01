import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useRef } from "react";


export default function ProductCard({title, imageUrl, description, price, category, size, comparePrice, productSize
}){
    
    if (category == "Drink desposit"){
        var desposit = "(zzgl. Pfand: €0.25)"
    }
    var [input, setInput] = useState()
    
    function handleAddClick(){
        
        input = Number(input)    
        
        if(input < 1 || input > 15 ||  ! Number.isInteger(input) ){
 
            var alertMessage = "Bitte eine ganze Zahl zwischen 1 und 15 eingeben!"
            alert(alertMessage)
   
        }
       
    }

    return(
        <Box sx={{
            width: "95vw",
            height: "80vh",
            backgroundColor: "rgb(120, 20, 20, 0.8)",
            display: "grid",
            gridTemplateColumns: "50% 50%"
        }}>
            <Box sx={{
              
                backgroundColor: "yellowgreen",
                height: "100%",
                display:"flex", justifyContent: "center", alignItems: "center"
            }}>
                <img src={"../public/img/Coca-Cola_klein.jpg"} alt= "Produktbild" style={{height: "420px", width: "420px",}}></img>
            </Box>
            <Box sx={{
                display: "grid",
                gridTemplateRows: "20% 10% 20% 10% 40%",
                backgroundColor: "yellow",
                paddingLeft: "20px",
                //color: "rgb(66, 135, 245)"
            }}>
                <Box sx={{
                    textAlign: "start"
                }}>
                    <h1>{title}</h1>
                </Box>
                <Box sx={{
                    textAlign: "start",
                    color: "blueViolet"
                }}>
                    {description}
                    </Box>
                <Box sx={{
                    textAlign: "start"
                }}>
                    Größe: {productSize}{size}<br/>
                    <span style={{fontSize:"24px"}}>{price} €</span> {desposit}<br/>
                    ({comparePrice} €/{size})
                    <br/>
                    <span style={{fontSize:"12px"}}>inkl. 19% MwSt., zzgl. Versandkosten</span> {/* optional */}
                </Box>
                <Box sx={{
                    
                }}>
                    <input type="number" id="productCount" style={{width: "56px", }} min= "1" max= "15" placeholder={1} onInput={e => setInput(e.target.value)}></input> 
                    <Button sx={{
                        width: "250px", backgroundColor: "red", color: "yellow", marginLeft: "20px"
                    }} onClick={handleAddClick}>In den Warenkorb</Button>
                </Box>
                <Box>
                     {/* Placeholder */}
                </Box>
            </Box>
        </Box>
    )
}