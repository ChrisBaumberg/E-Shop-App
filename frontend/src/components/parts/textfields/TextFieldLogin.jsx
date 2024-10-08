import React from "react";
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function TextFieldLogin({valueEmail, valuePassword}){
    //const [fieldType, setFieldType] = useState(true);
    /*const navigator = useNavigate();
    const handleClick = ()=>{
        navigator("/register")
    }
    const handleNavigateForgotPassword= () =>{
        navigator("/reset/askEmail")
    }*/
    return(
        //form for login fields
        <Box
        component="form"
        autoComplete="off"
        sx={{
            display:"flex",
            flexDirection:"column",
            width: "80%",
            height: "100%",
            alignItems: "flex-end",
            justifyContent: "center"
        }}>
        <TextField
        inputRef={valueEmail}
        sx={{
            width: "30%",
            marginBottom: "2%"
        }}
        required
        type="email"
        id="outlined-required"
        label="Email"
        defaultValue="email"
        name="email"/>
        <TextField 
        inputRef = {valuePassword}
        sx={{
            width: "30%",
            marginBotton: "10%",
        }}
        required
        //type={fieldType ? "password": "text"}
        id="outlined-required"
        label="password"
        defaultValue="password"
        name="password"
        /><VisibilityIcon /*onClick={(e) => setFieldType(!fieldType)}*//>
            <Box
            sx={{
                width: "30%",
                color: "text.primary",
                display: "flex",
                gap: "30%",
                justifyContent: "start"
            }}>
                {/*<Link to = "/register">*/}
                <Button /*onClick= {handleClick}*/ sx={{
                    width: "30%",
                    color: "text.primary"
                }}>Register</Button>
                {/*</Link>*/}
                <Button
                /*onClick = {(e)=> handleNavigateForgotPassword()}*/
                sx={{
                    width: "30%",
                    color: "text.primary"
                }}>Forgot Password?</Button>
            </Box>
        </Box>
    )
}