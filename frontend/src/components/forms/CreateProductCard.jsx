import { Box,  TextField, InputLabel, MenuItem, Button, Checkbox } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {styled} from "@mui/material/styles"

import { useCallback, useRef, useState } from "react";
import ProductCard from "../parts/cards/ProductCard";
//import { createProduct } from "../../utils/AjaxHandler";
import {v4 as uuidv4} from "uuid";
import axios from "axios";
import showNotification from "../parts/notification/showNotification";



export default function CreateProductCard(){
    const [picture, setPicture] = useState();
    const [category, setCategory] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [productSize, setProductSize] = useState();
    const [price, setPrice] = useState();
    const [comparePrice, setComparePrice] = useState();
    const [size, setSize] = useState();
    const [despositValue, setDespositValue] = useState("");
    const [productNumber, setProductNumber] = useState("");
    const formRef = useRef();
    const picRef= useRef();
    
    const getProductInput = async ()=>{
        
        const productRef = formRef.current;
        const productImg = productRef.imgUrl.files[0];
        const productTitle= productRef.name.value;
        const productDescription = productRef.description.value;
        const productSizeValue = productRef.sizeValue.value;
        const productPrice = productRef.price.value;
        const productComparePrice = productRef.comparablePrice.value;
        const productSizeIndicator = productRef.sizeIndicator.value;
        const productCategory = productRef.categoryName.value;
        const productDesposit = productRef.despositValue.value;
        const productNumber = productRef.productNumber.value;
        setTitle(productTitle);
        setDescription(productDescription);
        setProductSize(productSizeValue);
        setPrice(productPrice);
        setComparePrice(productComparePrice);
        setSize(productSizeIndicator);
        setCategory(productCategory);
        setDespositValue(productDesposit);
        setProductNumber(productNumber);
        try{
            console.log("Pic?")
            setPicture(URL.createObjectURL(productImg));
            localStorage.setItem("picture",productImg)
            console.log("Pic:", productImg)
        }
        catch{
            console.log("No Pic")
            setPicture(null)
        }
        setDespositValue(productDesposit);
        if (productImg != null){
            localStorage.setItem("picture",productImg)
            console.log(picture)
        }
        else{
            setPicture(null)
        }
        
    }
    const handleAddClick = (e)=>{
        e.preventDefault();
        console.log("Vorschau")
        getProductInput();


        
    }
    
    const removePicture = ()=>{
        setPicture(localStorage.removeItem("picture"))
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
    }
)
    const registerProduct = async(e) =>{
        console.log("Register Product")
        
        const formData={
            id: uuidv4(),   //intern
            picture: picture,
            title: title,
            size: size,
            description: description,
            productSize: productSize,
            price: price,
            category: category, //intern
            comparePrice: comparePrice,
            despositValue: despositValue,
            productNumber: productNumber, //intern
        }
        const config = {
            url: "http://localhost:3003/api/products",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(formData)
        }
        
        try{
            console.log("Trying to register Product")
            const resp = await axios(config);
            showNotification(`${resp.data.message}`,"normal");

        }
        catch(error){
            showNotification(`${resp.data.message}`,"normal")
        }
        console.log(formData)
    }
   

    return(
        <Box sx={{
            display:"grid",
            gridTemplateRows: "10% 80% 10%"
        }}>
            <h2 style={{textAlign:"center", width: "100%", height: "50px", borderRadius: "5px", border: "1px solid black",alignContent: "center", backgroundColor: "yellow"}}>Neues Produkt</h2>
        <Box sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "25% 75%"
        }}>   
        {/* Create Product Form */}  
        <Box 
       component="form"
        ref={formRef}
      
       sx={{
        height: "100%",
        width: "100%",
        bgcolor: "red",
        display: "flex",
        flexFlow: "column nowrap",
        borderRadius: "20px",
        gap: "10px",
       
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10px",
        paddingBottom: "10px"
       }}>
        
        <Button 
            component="label" 
            role={undefined}
            variant="contained"
            style={{color: "black", backgroundColor: "orange"}}
            startIcon={<CloudUploadIcon/>}>
            Upload file
            <VisuallyHiddenInput type="file" name="imgUrl" />
        </Button>
      
        <TextField sx={{
     
        }}
        id="productName"
        label="Produktname"
        name= "name"
        placeholder="Produktname"
        required/>

        
        <TextField style={{
       
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
        <TextField style={{
      
            
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
      
     <TextField style={{

      }}
      
        label = "Pfand"
        name="despositValue"
        placeholder="Pfand"
        required></TextField>
        <TextField style={{

        }}
        label = "WRIN"
        name="productNumber"
        placeholder="WRIN"
        required
        >
            </TextField>
       </Box> 
       {/* Vorschau ProductCard */}
       <Box sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(120, 20, 20, 0.8)",
            display: "grid",
            gridTemplateColumns: "50% 50%",
            border: "1px solid black",
            borderRadius: "10px"
        }}>
        {/* Example Product Card */}
        {/* Product Picture */}
            <Box sx={{
              
                backgroundColor: "yellowgreen",
                height: "100%",
                display:"grid", justifyContent: "center", alignItems: "center"
            }}>
                <img src={picture} alt= "Produktbild" style={{height: "420px", width: "420px",}}></img> 
                <Button style={{ display: "flex", flexWrap: "wrap", height: "25%",
                    backgroundColor: "red"
                }} onClick={removePicture}>Remove Picture</Button>
            </Box>
            
            {/* Product Details */}
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
                    <span style={{fontSize:"24px"}}>{price} €</span> <br/>{despositValue? <span style={{fontSize: "12px"}}>zzgl. Pfand: {despositValue} €</span>:null}<br/>
                    <span style={{fontSize: "12px"}}>({comparePrice} €/{size})</span>
                    <br/>
                    <span style={{fontSize:"12px"}}>inkl. 19% MwSt., zzgl. Versandkosten</span> {/* optional */}
                </Box>
                <Box sx={{
                    
                }}>
                    <input type="number" id="productCount" style={{width: "56px", }} min= "1" max= "15" placeholder={1} readOnly></input> 
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
       <Box sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px"
       }}>
        <Button style={{
            border: "1px solid black",
            borderRadius: "20px",
            backgroundColor: "green",
            color: "yellow",
            marginBottom: "5px",
            marginLeft: "5px",
            width: "230px",
       
        }} onClick={registerProduct}>Übernehmen</Button>
       <Button style={{
            border: "1px solid black",
            borderRadius: "20px",
            backgroundColor: "green",
            color: "yellow",
            marginBottom: "5px",
            marginLeft: "5px",
            width: "230px",
       
        }} onClick={handleAddClick}>Vorschau</Button>
       <Button type="reset"  style={{
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
       </Box>
  
    )
}