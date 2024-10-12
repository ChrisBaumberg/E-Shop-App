//overall box for general layout rows: 15% 65% 20%
import React from "react";
import { Box, Button, TextField } from "@mui/material";
import Headline from "../parts/header/Headline";
import TextfieldLogin from "../parts/textfields/TextFieldLogin";

import {  useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import showNotifications from "../Notifications/showNotifications";
import SubmitButton from "../parts/buttons/SubmitButton";
import SmallHelperText from "../parts/text/SmallHelperText";


export default function Login({handleLogin}){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const valueEmail = useRef();
    const valuePassword = useRef();
  

    const handleClick = async (e)=>{
        e.preventDefault();
        const data={
            email: valueEmail.current.value,
            password: valuePassword.current.value
        }
        const config = {
            url: "https://localhost:3003/api/login",
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            data: data
        }
        try{
            const response = await axios(config);
            showNotifications(`${response.data.message}`,"normal")
            localStorage.setItem("token", response.data.token);
            setLoggedIn(true);
            
        }
        catch(error){
            showNotifications(`${error.response.data.message}`,"red")
        }
    }
    return(
       <>
        {/*Here is the main content layout two rows */}
        <Box sx={{
                width: "100%",
                height: "100vh",
                display: "grid",
                gridTemplateRows: "60% 40%",
            
            }}>
                    
                <Box sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                       
                        justifyContent: "center",
                        alignItems: "center",
                       
                        }}>
                        <TextfieldLogin style={{
                            justifyContent: "center",
                            alignItems: "center", 
                        }} valueEmail={valueEmail} valuePassword={valuePassword}/>
                </Box>
                <Box sx={{
                        width: "100%",
                        height: "75px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                         
                        rowGap: "10px",
                        }}>
                        {/* SubmitButton */}
                        <SubmitButton onHandleClick={handleClick} text={"login"}/>
                        

                </Box>     
        </Box>
                        
        </>
    )
}