import { Box} from "@mui/system";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";

export default function LoginBar(){
    
    return(
        <>
        
        <Box sx={{
            marginLeft: "10px",
            height: "30%",
            width: "100%",
            display: "flex",
            flexDirection: "row-reverese",
            justifyContent: "flex-start",
      
            gap: "5px"
                    }}>
                        
            <div style={{
                display: "flex",
                flexDirection: "row",
               
             
                float: "right",
             
                justifyContent: "center",
                alignItems: "center",
                
            }}>
                
        
                <LoginIcon sx={{
                display: "block",
                width: "32px",
                height: "32px",
                color: "text.primary",
                border: "1px solid black",
                float: "left",
                marginRight: "5px",
                borderRadius: "30%",
                backgroundColor: "green"
            }}/>
            <LogoutIcon sx={{ 
                display: "block",
                width: "32px",
                height: "32px",
                color: "text.primary",
                border: "1px solid black",
                float: "left",
                marginRight: "5px",
                borderRadius: "30%",
                backgroundColor: "red"
            }}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                
              
                float: "left",
              
                justifyContent: "center",
                alignItems: "center",
            }}>
            <ShoppingCartIcon sx={{
                display: "block",
                width: "32px",
                height: "32px",
                color: "text.primary",
                border: "1px solid black",
                float: "left",
                marginRight: "5px",
                borderRadius: "30%",
                backgroundColor: "orange"
            }}/>
            </div>
        </Box>
        </>
    )
}