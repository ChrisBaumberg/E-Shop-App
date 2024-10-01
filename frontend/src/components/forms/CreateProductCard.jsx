import { Box,  TextField, InputLabel, MenuItem, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {styled} from "@mui/material/styles"
import InputAdornment from "@mui/material/InputAdornment";
import Dropdown from 'react-dropdown';
import Select from "react-select";
import { useCallback, useRef, useState } from "react";
import CreateNewCategory from "./CreateNewCategory";
import { Link } from "react-router-dom";


export default function CreateProductCard(){
    const [picture, setPicture] = useState();
    const [category, setCategory] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [productSize, setProductSize] = useState();
    const [price, setPrice] = useState();
    const [comparePrice, setComparePrice] = useState();
    const [size, setSize] = useState();
    const formRef = useRef();
    
    const getProductInput = async ()=>{
        
        const productRef = formRef.current;
        const productImg = productRef.imgUrl.value;
        const productTitle= productRef.name.value;
        const productDescription = productRef.description.value;
        const productSizeValue = productRef.sizeValue.value;
        const productPrice = productRef.price.value;
        const productComparePrice = productRef.comparablePrice.value;
        const productSizeIndicator = productRef.sizeIndicator.value;
        const productCategory = productRef.categoryName.value;
        setTitle(productTitle);
        setDescription(productDescription);
        setProductSize(productSizeValue);
        setPrice(productPrice);
        setComparePrice(productComparePrice);
        setSize(productSizeIndicator);
        setCategory(productCategory);
        setPicture(productImg);
        
    }
 
  
    const VisuallyHiddenInput = styled ("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });
   

    return(
       <Box 
       component="form"
        ref={formRef}
      
       sx={{
        height: "100%",
        width: "400px",
        bgcolor: "red",
        display: "flex",
        flexFlow: "column nowrap",
        borderRadius: "20px",
        gap: "10px",
        paddingLeft: "5px",
        paddingRight: "5px",
        justifyContent: "center",
        alignItems: "center",
    
       }}>
        <h2 style={{textAlign:"center", width: "100%", height: "50px", borderRadius: "5px", border: "1px solid black",alignContent: "center", backgroundColor: "yellow"}}>Neues Produkt</h2>
        <Button component="label" style={{color: "black", backgroundColor: "orange"}}
        startIcon={<CloudUploadIcon/>}>
            Upload file
            <VisuallyHiddenInput type="file" name="imgUrl"/>
        </Button>
        <TextField sx={{
     
        }}
        id="productName"
        label="Produktname"
        name= "name"
        placeholder="Produktname"
        required/>

        
        <TextField sx={{
       
        }}
        
        label="Beschreibung"
        name= "description"
        placeholder="Beschreibung"
        multiline
        rows={4}
        required>

        </TextField>
        <TextField
        label="Größe"
        name="sizeValue"
        placeholder="Größe"
        required>
        </TextField>
        <TextField label="Größeneinheit" name="sizeIndicator" placeholder="kg/l" required>
        
        </TextField>
        <TextField sx={{
      
            
        }}
        
        label="Preis"
        name= "price"
        placeholder="€ xx,xx"
        required>

        </TextField>
        <TextField label="Vergleichspreis" name="comparablePrice" placeholder="Vergleichspreis" required>

        </TextField>
      <TextField sx={{
      
      }}
        label="Kategorie"
        name="categoryName"
        placeholder="Kategorie"
        required
      >

      </TextField>
      
        
        <Button sx={{
            border: "1px solid black",
            borderRadius: "20px",
            backgroundColor: "green",
            color: "yellow",
            marginBottom: "5px",
            marginLeft: "5px",
            width: "230px",
       
        }} onClick={getProductInput}>Hinzufügen</Button>
       <Button type="Reset" sx={{
            border: "1px solid black",
            borderRadius: "20px",
            backgroundColor: "green",
            color: "yellow",
            marginBottom: "5px",
            marginLeft: "5px",
            width: "230px",
       
        }}>Reset</Button>
        <Button sx={{
            border: "1px solid black",
            borderRadius: "20px",
            backgroundColor: "green",
            color: "yellow",
            marginBottom: "5px",
            marginLeft: "5px",
            width: "230px"
        }}>Abbrechen</Button>
       </Box> 
    )
}