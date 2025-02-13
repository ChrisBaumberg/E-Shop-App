//import React from "react";
import { Box } from "@mui/system";
import { useState, useRef } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import showNotification from "../parts/notification/showNotification";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {v4 as uuidv4} from "uuid";


export default function Register(){
    const [equal, setEqual] = useState(false);
    const formRef = useRef();
    const navigator = useNavigate();
    const handleNavigate = () =>{
        navigator("/login");
    }
    const checkPassword = () =>{
        const form = formRef.current;
        form.password.value === form.confirmPassword.value ? setEqual(true) : setEqual(false);
        
    }
    const registerUser = async (e)=>{
        console.log("Register user...")
        e.preventDefault();
        const form = formRef.current;
    
        const formData={
            id: uuidv4(),
            username: form.username.value,
            email: form.email.value,
            password: form.password.value,
            role: "client"
        }
       
        const config = {
            url:"http://localhost:3003/api/register",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(formData)
        }
   
       
        try{
            console.log("Trying to register user")
            const resp = await axios(config);
  
            console.log("Resp Success");
            showNotification(`${resp.data.message}`,"normal");
            console.log(resp.data.message);
            handleNavigate();
        }catch(error){
            console.log("Resp Error")
            showNotification(`${resp.data.message}`,"normal");
            console.log(error.resp.data.message);
        }
        console.log("end register")
    }
    return(
        <>
        <Box sx={{
            height: '100vh',
            width: '100vw',
            
        }}>
            
            
            {/* //Here comes the box component for the form */}
            <Box
            component='form'     
            ref={formRef}    
            onSubmit={(e)=>{registerUser(e)}}
            sx={{
                height: '100%',
                width: '100%',
                display: 'grid',
                gridTemplateRows: '70% 15% 15%',
                
            }}>
                <Box            
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    rowGap: '5%',
                    //border: "1px solid black"
                }}>
                    
                    <TextField  required id="outlined-basic" label="username"
                    InputLabelProps={{
                        style: { color: 'black' },
                    }}
                    name= "username" variant="standard" />
                    <TextField required id="outlined-basic" 
                    InputLabelProps={{
                        style: { color: 'black' },
                    }}
                    label="email" name="email" variant="standard" />
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
                </Box>
                
                <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    
                    
                    
                <Button
                type='submit'
                style={{
                    height: '50%',
                    width: '30%',
                    backgroundColor: 'success.main',
                
                }}
                variant='contained'
                >Register</Button> <br/>
                
                
                </Box>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}
                
                >
                Du hast bereits einen Account? <span style={
                    {cursor: 'pointer',
                        textDecoration: "underline",
                        color: "blue",
                        marginLeft: "10px"
                    }
                } onClick={handleNavigate}>Zum Login</span> 
                </Box>
            </Box>
                
        </Box>    
    </>
    )
}