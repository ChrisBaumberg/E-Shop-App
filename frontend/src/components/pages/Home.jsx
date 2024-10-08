import { Box, Grid2 as Grid } from "@mui/material";


import ProductCard from "../parts/cards/ProductCard";
import { Fragment, useEffect, useState } from "react";
import { getProductsFromBackend } from "../../utils/AjaxHandler";

export function Home(){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProductsFromBackend(setProducts);
    },[])

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
                    {/* Product Card*/}
                    <Box sx={{
                        
                    }}>{ products.map((product)=>{
                        return( <Fragment key={product.id}>
                    <ProductCard title={title} imageUrl={productPicture} description={description} price={price} category={category} size={size} productSize={productSize} comparePrice={comparePrice}/>
                    </Fragment>
                        )
                    })
                }
                    </Box>
                </Grid>
                {/*</Grid>*/}
            </Box>
        </Box>
    )
}