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
    const [username, setUsername] = useState([]);
    const [role, setRole] = useState("");
    const [admin, setAdmin]= useState("");
    const onModalOpen = () => setSettingsOpen(!settingsOpen);
    const navigator = useNavigate();
    
    useEffect(()=>{
        
        const token = localStorage.getItem("token");
        
        
        if (token){
          setLoggedIn(true);
          setUsername(localStorage.getItem("username"));
          setRole(localStorage.getItem("role"));
        }
        if (role == "admin"){
            setAdmin("*");
          
        }
        
      },[])
    

    const handleLogout = () =>{
        localStorage.clear();
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
                
            
            {isLoggedIn?
            <>
            <div style={{
                height: "50px",
                marginRight: "20px",
                backgroundColor: "yellowgreen",
                display:"flex",
                borderRadius: "50%",
                justifyContent:"center", 
                alignItems:"center"
                
            }}><span style={{display: "flex",border: "1px solid black",
                borderRadius : "50%",height:"100%", justifyContent:"center", alignItems:"center" }}>{username}</span><span style={{backgroundColor: "red", borderRadius : "50%"}}>{admin}</span></div>
            
            <LogoutIcon 
            
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
            }}/></>:
          
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
            <Settings settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} isLoggedIn={isLoggedIn}/>
        ):null}
        </>
    )
}