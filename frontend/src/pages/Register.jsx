import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import showNotification from "../components/parts/notification/showNotification";
import {v4 as uuidv4} from "uuid";

import { TextField, Box, Button } from "@mui/material";


export default function Register(){
    const [equal, setEqual] = useState(false);
    const formRef = useRef();
    /*const navigator = useNavigate();
    const handleNavigate = () =>{
        navigator("/login")
    }*/
    const checkPassword = () => {
        console.log("formRef: ",formRef.current);
        const form = formRef.current;
        console.log("form: ", form)
        form.password.value === form.confirmPassword.value ? setEqual(true): setEqual(false);
    }
    const registerUser = async(e) => {
        console.log("Register user...")
        e.preventDefault();
        const form = formRef.current;
        console.log(form)
        const formData = {
            id: uuidv4(),
            prename: form.fullname.value,
            famname: form.famname.value,
            email: form.email.value,
            password: form.password.value,
            role: "customer"
        } 
    const config = {
        url: "http://localhost:3003/api/register",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(formData)
    }
    try{
        const resp = await axios(config);
        //console.log("Res")
        showNotification(`${resp.data.message}`,"normal");
        handleNavigate();
    }
    catch(error){
        showNotification(`${resp.data.message}`,"red")
    }
   }
   return(
    <>
    <Box sx={{
        height: "100vh",
        width: "100vw",
        textAlign: "center"
    }} compontent="form"
    ref={formRef}
    onSubmit={(e)=>{registerUser(e)}}>
        <h1>Registrieren:</h1>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "5%"
        }}>
    <TextField required id="outlined-basic" label="prename"
    InputLabelProps={{
        style: {color: "black"},
    }}
    name="prename" variant="standard"/>
    <TextField required id="outlined-basic" label="famname" InputLabelProps={{
        style: {color: "black"},
    }}
    name="famname" variant="standard"/>
    <TextField required id="outlined-basic" label="email" InputLabelProps={{
        style: {color: "black"},
    }}
    name="email" variant="standard"/>
    <TextField required id="outlined-basic" 
                    InputLabelProps={{
                        style: { color: 'black' },
                    }}                        
                    label="password"
                    name="password" variant="standard"/>
    <TextField required
    onChange={checkPassword}
    id="outlined-basic"
    InputLabelProps={{
        style: { color: 'black' },
    }}     
    name='confirmPassword'                   
    label={equal ? "💚 Equal" : "❗Password not equal"} variant="standard"/>
    
    <Button type="submit" sx={{
        height: "10%",
        width: "10%",
        backgroundColor: "success.main",
        marginTop:"10px"
    }} variant="contained">
        Registrieren
    </Button>
    </Box>
    
    </Box>
        </>
   )
}