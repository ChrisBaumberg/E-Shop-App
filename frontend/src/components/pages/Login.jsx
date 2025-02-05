//overall box for general layout rows: 15% 65% 20%
import React from "react";
import { Box, Button, TextField } from "@mui/material";

import TextfieldLogin from "../parts/textfields/TextFieldLogin";

import {  useRef, useState } from "react";

import axios from "axios";
import showNotification from "../parts/notification/showNotification";
import SubmitButton from "../parts/buttons/SubmitButton";
import { useNavigate } from "react-router-dom";


export default function Login({handleLogin}){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const valueEmail = useRef();
    const valuePassword = useRef();
    const navigator = useNavigate();
  
    const handleNavigate = () =>{
        navigator(-1);
        location.reload(false);
        
        
}
   

    const handleClick = async (e)=>{
        e.preventDefault();
        const data={
            email: valueEmail.current.value,
            password: valuePassword.current.value
        }
        const config = {
            url: "http://localhost:3003/api/login",
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            data: data
        }
       
        try{
            console.log("Trying to login user")
            const response = await axios(config);
            showNotification(`${response.data.message}`,"normal")
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("role", response.data.role);
            setLoggedIn(true);
            
            handleNavigate();
            
            //console.log("Loggedin");
        }
        catch(error){
            showNotification(`${error.response.data.message}`,"red");
            alert("Login failed! Wrong E-Mail or wrong Password!")
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