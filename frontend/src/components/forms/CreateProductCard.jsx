import { Box,  TextField, InputLabel, MenuItem, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {styled} from "@mui/material/styles"
import InputAdornment from "@mui/material/InputAdornment";

import { useCallback, useRef, useState } from "react";
import showNotification from "../../components/parts/notification/showNotification"

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
    const [desposit, setDesposit] = useState(false);
    const [despositValue, setDespositValue] = useState("");
 
    const formRef = useRef();
    

    const getProductInput = async ()=>{
        
        const productRef = formRef.current;
        
        const productTitle= productRef.name.value;
        const productDescription = productRef.description.value;
        const productSizeValue = productRef.sizeValue.value;
        const productPrice = productRef.price.value;
        const productComparePrice = productRef.comparablePrice.value;
        const productSizeIndicator = productRef.sizeIndicator.value;
        const productCategory = productRef.categoryName.value;
        const productDesposit = productRef.despositCheck.checked;
        const productImg = productRef.imgUrl.value;
        setPicture(productImg)
        setTitle(productTitle);
        setDescription(productDescription);
        setProductSize(productSizeValue);
        setPrice(productPrice);
        setComparePrice(productComparePrice);
        setSize(productSizeIndicator);
        setCategory(productCategory);
        
        setDesposit(checkDesposit());
        
    }
    const checkDesposit = () =>{
        const productRef = formRef.current;
        const productDesposit = productRef.despositCheck.checked;
        if (productDesposit == true){
            setDespositValue("(Pfand: 0,25€)")
        }
        else{
            setDespositValue("")
        }
        return despositValue
}
    const getTitle = async () =>{
        const productRef = formRef.current;
        const productTitle= productRef.name.value;
        setTitle(productTitle);
    }
    const handleOnChange = () =>{
        setDesposit(!desposit);
        
    }
    const handlePreviewClick = async(e)=>{
        e.preventDefault();
        getProductInput();
  
        const data = {
            title: title,
            description: description,
            size: productSize,
            price: price,
            comparePrice: comparePrice,
            sizeIndicator: size,
            category: category,
            pictureUrl: picture,
            despositValue: despositValue,
        }
        console.log(data)
      
    }

    const handleNewProductCard = async () =>{
        e.preventDefault();
        getProductInput();
  
        const data = {
            title: title,
            description: description,
            size: productSize,
            price: price,
            comparePrice: comparePrice,
            sizeIndicator: size,
            category: category,
            pictureUrl: picture,
            despositValue: despositValue,
        }
        const config = {
            url: "http://localhost:3003/api/posts",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        }
       
       try{
            const response = await axios(config);
            showNotification(`${response.data.message}`,"normal");
            localStorage.setItem("data", data);
           
            
        }
        catch(error){
            showNotification(`${error.response.data.message}`,"red")
        }
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
        <Box sx={{
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateRows: "10% 80% 10%",
            backgroundColor: "red",
            border: "2px solid red"
        }}>
            <Box sx={{
                width: "90%", height: "100%", backgroundColor: "sandybrown", justifyContent: "center", display: "flex"
            }}>
                <h2 style={{textAlign:"center", width: "90%", height: "50px", border: "1px solid black",alignContent: "center", backgroundColor: "yellow"}}>Neues Produkt{ title?`: ${title}`:""}</h2>
            </Box>
       <Box 
       component="form"
        ref={formRef}
      
       sx={{
        width: "100%",
        backgroundColor: "aliceblue",
        display: "flex",
        flexFlow: "column nowrap",
        borderRadius: "20px",
        gap: "10px",
        paddingLeft: "5px",
        paddingRight: "5px",
        
    
       }}>
        
        <Box sx={{
            display: "grid",
            backgroundColor: "aqua",
            gridTemplateColumns: "50% 50%",
            width: "90%"
        }}>
        <Box sx={{
        height: "100%",
        
        bgcolor: "yellowgreen",
        display: "flex",
        flexFlow: "column nowrap",
        borderRadius: "20px",
        gap: "10px",
        padding: "5px 5px 5px 5px",
        alignItems: "center"
    
       }}>
        
        <Button component="label" style={{color: "black",width: "150px", backgroundColor: "orange"}}
        startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" name="imgUrl" />
        </Button>
        <TextField sx={{
        
        }}
        id="productName"
        label="Produktname"
        name= "name"
        placeholder="Produktname"
        onChange={getTitle}
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
        sx={{
    
            
        }}
        label="Größe"
        name="sizeValue"
        placeholder="Größe"
        required>
        </TextField>
        <TextField sx={{
    
            
        }}label="Größeneinheit" name="sizeIndicator" placeholder="kg/l" required>
        
        </TextField>
        <TextField sx={{
         
            
        }}
        
        label="Preis"
        name= "price"
        placeholder="€ xx,xx"
        required>

        </TextField>
        <TextField sx={{
       
            
        }}label="Vergleichspreis" name="comparablePrice" placeholder="Vergleichspreis" required>

        </TextField>
      <TextField sx={{
           
            
        }}
        label="Kategorie"
        name="categoryName"
        placeholder="Kategorie"
        required
      >

      </TextField>
      <label > Pfand?
      <input type="checkbox" name="despositCheck" checked={desposit} onChange={handleOnChange}/>
       </label>
      
        
       
        </Box>
        {/* Vorschau */}
        <Box sx={{
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "salmon",
            width: "100%"
        }}>
            <h1 style={{textAlign:"center"}}>Vorschau der Produktkarte:</h1>
        <Box sx={{
            width: "80%",
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
              
                    <img src={picture} style={{height: "210px", width: "210px",border: "1px solid black", display: "flex", alignItems:"center",justifyContent: "center",justifySelf:"center", alignSelf:"center"}}></img>
                
           {/* Content */}
            <Box sx={{
                display: "grid",
                gridTemplateRows: "10% 30% 10% 25% 10%",
                backgroundColor: "yellow",
                paddingLeft: "10px",
                paddingTop: "5px",
                
                textAlign: "start"
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
                    marginTop: "10px",
                    textAlign: "start"
                  
                }}>
                    Größe: {productSize}{size}<br/>
                    <span style={{fontSize:"24px", fontWeight:"bold"}}>{price} €</span> <span style={{fontSize:"12px"}}>{despositValue}</span><br/>
                    <p style={{fontSize: "12px", margin:"0"}}>({comparePrice} €/{size})</p>
                    <br/>
                    <span style={{fontSize:"12px"}}>inkl. 19% MwSt., zzgl. Versandkosten</span> {/* optional */}
                </Box> <br/>
                <Box sx={{
   
                    textAlign: "start"
                }}>
                    <input type="number" id="productCount" style={{width: "40px",marginLeft: "10px", }} min= "1" max= "15" placeholder={1} readOnly></input> <br/>
                    <Button sx={{
                        width: "250px", backgroundColor: "red", color: "yellow", marginLeft: "20px", marginTop: "10px"
                    }}>In den Warenkorb</Button>
                </Box>
                <Box>
                     {/* Placeholder */}
                </Box>
            </Box>
        </Box>
        </Box> 
        </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent: "center"}}> 
        <Button sx={{
            border: "1px solid black",
            borderRadius: "20px",
            backgroundColor: "green",
            color: "yellow",
            marginBottom: "5px",
            marginLeft: "5px",
            width: "230px",
       
        }} onClick={handleNewProductCard}>Übernehmen</Button>
        <Button sx={{
            border: "1px solid black",
            borderRadius: "20px",
            backgroundColor: "green",
            color: "yellow",
            marginBottom: "5px",
            marginLeft: "5px",
            width: "230px",
       
        }} onClick={handlePreviewClick}>Vorschau</Button>
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
       </Box> 
       </Box>
    )
}