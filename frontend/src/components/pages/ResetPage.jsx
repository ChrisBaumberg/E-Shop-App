import { Button, TextField, Typography, Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import showNotifications from "../Notifications/showNotifications";


const checkPassword = (formRefCurrent, setEqual) =>{
    formRefCurrent.password.value === formRefCurrent.passwordVerify.value ? setEqual(true):setEqual(false)
}

const onFormHandleEmail = async(e, formRef, navigator, setResetNumber) =>{
    e.preventDefault();
    const email = formRef.current.email.value;
    const config = {
        url: "http://localhost:3002/api/auth/reset",
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        data: {
            email: email
        }
    }
    try{
        const response = await axios(config);
        console.log(response);
        showNotifications(response.data.message, "normal");
        setResetNumber(response.data.code);
        localStorage.setItem("resetEmail",response.data.token);
        navigator("/reset/verify");
    }
    catch(e){
        console.log(e);
        showNotifications("Code is incorrect","red");
    }
}

const onVerifyHandle = (e, formRef, resetNumber, setResetAllowed, navigator) =>{
    e.preventDefault();
    const code = formRef.current.code.value;
    if (code == resetNumber){
        showNotifications("Code verified","normal");
        setResetAllowed(true);
        navigator("/reset/newPassword");
    }
    else{
        showNotifications("Code is incorrect","red");
    }
}

const onPasswordHandle = async (e, formRef, navigator, emailToken, setEmailToken) =>{
    const newPassword = formRef.current.password.value;
    const config = {
        url: "http://localhost:3002/api/auth/reset/newPassword",
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${emailToken}`
        },
        data: {
            password: newPassword
        }
    }
    try {
        const response = axios(config);
        console.log(response);
        showNotifications((await response).data.message,"normal");
        setEmailToken("");
        localStorage.removeItem("resetEmail");
        navigator("/login");
    }
    catch(e){
        console.log(`Error: ${e}`);
        showNotifications(e.response.data.message,"red")
    }
}
export default function ResetPage({text, resetAllowed, setResetAllowed, resetNumber, setResetNumber}){
    const [fieldType, setFieldType] = useState(true);
    const [equal, setEqual] = useState(false);
    const [emailToken, setEmailToken] = useState("");
    const formRef = useRef();
    const navigator = useNavigate();
    
    useEffect(()=>{
        setEmailToken(localStorage.getItem("resetEmail"));
    },[])
    console.log(emailToken);
    {if (text==="Type in your Email to reset password"){
        return(
            <Box ref={formRef} onSubmit={(e)=>onFormHandleEmail(e, formRef, navigator, setResetNumber)} component="form" autoComplete = "off"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                flexDirection: "column",
                width: "100%",
                height: "100%",
            }}
            >
                <Typography variant = "h4" sx  ={{marginBottom: "10%"}}>{text}</Typography>
                <TextField
                sx={{

                    width: "30%",
                    marginBottom: "10%",
                }}
                required
                type="email"
                name="email"
                id="outlined-required"
                label="💌Email"
                defaultValue="email"
                />
                <Button
                sx={{
                    width: "30%",
                    height: "40%",
                    marginBottom:"10%",
                }}
                variant ="contained"
                type="submit">Submit</Button>
            </Box>
        );
    }else if(text==="Type in the code you recieved via Email"){
        return(
            <Box ref={formRef} onSubmit = {(e)=> onVerifyHandle(e,formRef, resetNumber, setResetAllowed, navigator)}
            component = "form" autoComplete="off"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                flexDirection: "column",
                width: "100%",
                height: "100%",
            }}
            >
                <Typography variant= "h4" sx={{marginBottom: "10%"}}>{text}</Typography>
                <TextField
                sx={{
                    width: "30%",
                    marginBottom: "10%",
                }}
                required
                type="number"
                name="code"
                id="outlined-required"
                label="🤫code"
                defaultValue="code"
                />
                <Button
                sx={{
                    width:"30%",
                    height: "40%",
                    marginBottom: "10%",
                }}
                variant="contained"
                type="submit"
                >Submit</Button>
            </Box>
        );
    }
    else if(text==="Type in your new Password"){
        return(
            <Box ref={formRef} onSubmit={(e) => onPasswordHandle(e, formRef, navigator, emailToken, setEmailToken)} component="form" autoComplete="off"
            sx={{
                display:"flex",
                alignItems: "center",
                justifyItems: "center",
                flexDirection: "column",
                width: "100%",
                height: "100%",
            }}
            >
                <Typography variant="h4" sx={{marginBottom: "10%"}}>{text}</Typography>

            <TextField
            InputLabelProps={{
                style: {color: "black"}
            }}
            sx={{
                width: "30%",
                marginBottom: "10%",
            }}
            required
            type={fieldType? "password" : "text"}
            name= "password"
            id="outlined-required"
            label="🤫new Password"
            defaultValue="12345"
            /><VisibilityIcon onClick={(e)=> setFieldType(!fieldType)}/>
            <TextField onChange={()=> checkPassword(formRef.current.setEqual)} InputLabelProps={{
                style: {color: "black"},
            }}
            sx={{
                width: "30%",
            
                marginBottom: "10%",
            }}
            required
            type={fieldType? "password":"text"}
            name="passwordVarify"
            id="outlined-required"
            defaultValue="12345"
            label={equal? "💚 Equal" : "❗Password not equal"}
            />
            <Button
            sx={{
                width: "30%",
                height: "40%",
                marginBottom: "10%",
            }}
            variant="contained"
            type="submit"
            >Submit</Button>
            </Box>
        )
    }}
}