import { Box, Grid2 as Grid } from "@mui/material";


import ProductPage from "./ProductPage";
import { useState } from "react";

export function Home(){
    const [productPicture, setProductPicture] = useState(["../public/img/Coca-Cola_klein.jpg"])
    const [title, setTitle] = useState(["Elbling trocken 2023"])
    const [description, setDescription] = useState()
    const [price, setPrice] = useState(["€ 6,00"])
    const [category, setCategory] = useState(["Drink desposit"])
    
    const [size, setSize] = useState(["l"]);
    const [comparePrice, setComparePrice] = useState(["€ 8,00"]);
    const [productSize, setProductSize] = useState(["0,75"]);

    return(
        <Box sx={{
            //backgroundColor: "background.default",
            minHeight: "150vh",
            width: "90vw",
            border: "1px solid black",
            backgroundColor:"rgb(120, 54, 75, 0.25)",
            justifyItems: "center",
            alignItems: "center",
            paddingTop: "10px",
            paddingLeft: "10px",
            marginLeft: "5vw"
        }}>
            <Box>
                {/*<Grid container spacing = {2}>*/}
                    {/* Header */}
                <Grid xs={12} md={12}>
                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        backgroundColor: "blue"
                    }}>
                    
                    </Box>
                    {/* ProductPage */}
                    <Box sx={{
                        
                    }}>
                    <ProductPage title={title} imageUrl={productPicture} description={description} price={price} category={category} size={size} productSize={productSize} comparePrice={comparePrice}/>
                    
                    </Box>
                </Grid>
                {/*</Grid>*/}
            </Box>
        </Box>
    )
}