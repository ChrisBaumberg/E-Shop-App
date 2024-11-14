import { Box} from "@mui/system";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from "@mui/icons-material/Login";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import Settings from "../../pages/Settings";


export default function LoginBar({isLoggedin}){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const onModalOpen = () => setSettingsOpen(!settingsOpen);
    const navigator = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (token){
          setLoggedIn(true);
        }
      },[])
      const handleLogout = () =>{
        setLoggedIn(false);
        console.log("Logged out")
      }
      const handleLogin = () =>{
        navigator("/login")
      }
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
                
            
            {isLoggedIn?<LogoutIcon 
            
            onClick={handleLogout}
            style={{ 
                display: "block",
                width: "32px",
                height: "32px",
                color: "text.primary",
                border: "1px solid black",
                float: "left",
                marginRight: "5px",
                borderRadius: "30%",
                backgroundColor: "red",
                cursor: "pointer"
            }}/>:
          
            <LoginIcon 
            onClick={handleLogin}
            style={{
                display: "block",
                width: "32px",
                height: "32px",
                color: "text.primary",
                border: "1px solid black",
                float: "left",
                marginRight: "5px",
                borderRadius: "30%",
                backgroundColor: "green",
                cursor: "pointer"
            }}/>
            }
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                
              
                float: "left",
              
                justifyContent: "center",
                alignItems: "center",
            }}>
            <ShoppingCartIcon style={{
                display: "block",
                width: "32px",
                height: "32px",
                color: "text.primary",
                border: "1px solid black",
                float: "left",
                marginRight: "5px",
                borderRadius: "30%",
                backgroundColor: "orange",
                cursor: "pointer"
            }}/>
        
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                
              
                float: "left",
              
                justifyContent: "center",
                alignItems: "center",
            }}>
            <SettingsIcon
                onClick={onModalOpen}
                style={{
                    display: "block",
                    width: "32px",
                    height: "32px",
                    color: "text.primary",
                    border: "1px solid black",
                    float: "left",
                    marginRight: "5px",
                    borderRadius: "30%",
                    backgroundColor: "grey",
                    cursor: "pointer"
            }}/>
        
            </div>
        </Box>
        {settingsOpen?(
            <Settings settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} isLoggedIn={isLoggedIn}></Settings>
        ):null}
        </>
    )
}