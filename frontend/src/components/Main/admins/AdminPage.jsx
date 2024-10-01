import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {Link, useNavigate} from "react-router-dom";

export default function AdminPage(){
   /* function handleOnClick(e){
            const [buttonValue, setButtonValue] = useState();
            setButtonValue(e.target.value);
            console.log(buttonValue)
    }
    
    

    /*const navigate= useNavigate();
    useEffect(()=>{
        if (buttonValue =="newProduct"){
            console.log("navigate to /newproduct")
            navigate("/newproduct")
        }
        else{
            console.log("No Button value")
        }
        
    },[buttonValue])*/

    return(
        <Box sx={{
            backgroundColor:"red",
            display: "flex",
            flexFlow: "column nowrap",
            width: "350px",
            padding: "10px",
            borderRadius: "20px",
            gap: "10px",
            paddingLeft: "5px",
            paddingRight: "5px",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h2 style={{textAlign:"center", width: "100%", height: "50px", borderRadius: "5px", border: "1px solid black",alignContent: "center", backgroundColor: "yellow"}}
            >Admin Menü</h2>
            {/* Add new product */}
          
            <Button sx={{
                border: "1px solid black",
                borderRadius: "20px",
                backgroundColor: "green",
            
                color: "yellow",
                width: "300px"
            }}value="newProduct">Neues Produkt hinzufügen</Button>
            {/* Update productcard (title, description, price, category) */}
            <Button sx={{
                border: "1px solid black",
                borderRadius: "20px",
                backgroundColor: "green",
           
                color: "yellow",
                width: "300px"
            }}>Produkt updaten</Button>
            {/* Delete product */}
            <Button sx={{
                border: "1px solid black",
                borderRadius: "20px",
                backgroundColor: "green",
                color: "yellow",
                width: "300px"
            }}>Produkt entfernen</Button>
            {/* Add new category */}
            <Button sx={{
                border: "1px solid black",
                borderRadius: "20px",
                backgroundColor: "green",
                color: "yellow",
                width: "300px"
            }}>Neue Kategorie hinzufügen</Button>
            </Box>
    )
}