//overall box for general layout rows: 15% 65% 20%
import React from "react";
import { Box, Button, TextField } from "@mui/material";
import Headline from "../parts/header/Headline";
import TextfieldLogin from "../parts/textfields/TextFieldLogin";
import QuoteCard from "../parts/cards/QuoteCard";
import {  useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import showNotifications from "../Notifications/showNotifications";
import SubmitButton from "../parts/buttons/SubmitButton";
import SmallHelperText from "../parts/text/SmallHelperText";


export default function Login({handleLogin}){
    const valueEmail = useRef();
    const valuePassword = useRef();
    const navigator = useNavigate();

    const handleClick = async (e)=>{
        e.preventDefault();
        const data={
            email: valueEmail.current.value,
            password: valuePassword.current.value
        }
        const config = {
            url: "https://localhost:3002/api/login",
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
            handleLogin(true);
            navigator("/feed")
        }
        catch(error){
            showNotifications(`${error.response.data.message}`,"red")
        }
    }
    return(
        //overall box for general layout rows 15, 65, 20
        <Box sx={{
            width: "100vw",
            height: "100vh",
            display: 'grid',
            gridTemplateRows: '15% 65% 20%',
            fontSize: "32px"
        }}>
            {/*Here is the Headline component*/}
            <Headline weight={"32px"}/>

         
            {/*Here is the main content layout two columns */}
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "50% 50%",
     
            }}>
                    {/* Login fields */}
                    <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                    
                        }}>
                            <TextfieldLogin valueEmail={valueEmail} valuePassword={valuePassword}/>
                        </Box>
                        
                        {/* QuoteCard */}
                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                       
                        }}>
                            <QuoteCard/>

                    </Box>
            </Box>
                        {/* Submitbuttons and Helpertext */}
                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            rowGap: "10%",
                        }}>
                            {/* SubmitButton */}
                            <SubmitButton onHandleClick={handleClick} text={"login"}/>
                            <SmallHelperText text={"Continue to Feed"}/>
                            <Box sx={{
                                width:"80vw",
                                display: "flex",
                                gap: "1%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>

                            </Box>
                        </Box>
        </Box>
    )
}