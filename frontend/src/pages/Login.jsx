import React from "react";
import axios from "axios";
import { useRef } from "react";
import showNotification from "../components/parts/notification/showNotification";
import { useNavigate } from "react-router-dom";

export default function Login({handleLogin}){
    const valueEmail = useRef();
    const valuePassword = useRef();
    //const navigator = useNavigate();

    const handleClick = async(e)=>{
        e.preventDefault();
        const data = {
            email: valueEmail.current.value,
            password: valuePassword.current.value
        }
        const config = {
            url: "https://localhost:3003/api/login",
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            data: data
        }
        try{
            const response = await axios(config);
            showNotification(`${response.data.message}`,"normal")
            localStorage.setItem("token", response.data.token);
            handleLogin(true);
            //navigate("/products")
        }
        catch(error){
            showNotification(`${error.response.data.message}`,"red")
        }
    }
    return(
        <Box sx={{
            width: "100vw",
            height: "100vh",
            display: "grid",
            gridTemplateRows: "15% 65% 20%",
            fontSize: "32px"
        }}>
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                Login:
            </Box>
            <Box sx={{
                width: "100%",
                height: "100%"
            }}>
                <TextfieldLogin valueEmail={valueEmail} valuePassword={valuePassword}/>
            </Box>
            <Box sx={{
                width: "100%",
                height: "100%"
            }
            }>
                <SubmitButton onHandleClick={handleClick} text={"login"}/>
            </Box>
        </Box>
    )
}