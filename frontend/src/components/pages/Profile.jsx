import { Box, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import showNotification from "../parts/notification/showNotification";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile(){
    const id = localStorage.getItem("id")
    const formRef = useRef();
     const navigator = useNavigate();
        const handleNavigate = () =>{
            navigator("/");
        }


    const updateUser = async (e) =>{
        console.log("Update user...")
        e.preventDefault();
        const adressRef= formRef.current;
        const id = localStorage.getItem("id")
        const prename = adressRef.prename.value;
        const familyname= adressRef.familyname.value;
        const street = adressRef.street.value;
        const houseNumber = adressRef.houseNumber.value;
        const cityCode = adressRef.postCityCode.value;
        const city = adressRef.city.value
        if (!prename||!familyname||!street||!houseNumber||!cityCode||!city){
            alert("Bitte alle Felder ausfüllen!")
            
        }
        else{
        const formData={
            id: id,
            prename: adressRef.prename.value,
            familyname: adressRef.familyname.value,
            street: adressRef.street.value,
            houseNumber: adressRef.houseNumber.value,
            cityCode: adressRef.postCityCode.value,
            city: adressRef.city.value
        }
        const config = {
            url: "http://localhost:3003/api/update",
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(formData)
        }
        try{
            console.log("Trying to update user");
            const resp = await axios (config);
            showNotification(`${resp.data.message}`,"normal");
            handleNavigate();
        }
        catch (error){
            console.log("Resp Error");
            showNotification(`${resp.data.message}`, "normal")
        }
        console.log("update finished")
        }
    }

    return(
        <Box sx={{
            display: "grid",
            gridTemplateRows:"60% 10% 30%",
            width: "100%",
            alignItems: "center",
            gap: "10px"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                
                padding: "10px"
                }}  
                component="form" 
                ref={formRef}
      
                >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5%"
                    }}>
            <TextField id="outlined-basic" label="Vorname" name="prename"/>
            <TextField id="outlined-basic" label="Nachname" name="familyname"/>
            </Box>  
            <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5%"
                    }}>
            <TextField id="outlined-basic" label="Strasse" name="street" style={{ width: "85%"}}/>
            <TextField id="outlined-basic" label="Nr."name="houseNumber" style={{ width: "15%"}}/></Box>
            <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5%"
                    }}>
            <TextField id="outlined-basic" label="PLZ" name="postCityCode" style={{width: "20%"}}/>
            <TextField id="outlined-basic" label="Stadt" name="city" style={{width: "80%"}}/>
            </Box>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems:"center", justifyContent:"center"
            }}>
            <Button onClick={(e) => updateUser(e)} style={{width: "200px", backgroundColor: "red", textAlign:"center", }}>
                Speichern
            
            </Button>
            </Box>
            <Box sx={{
                
                textAlign:"center"
            }}>
                <h2>Zahlungsmethoden</h2>
                {/* Links zu Zahlungsmethoden mit entsprechenden imgs*/}
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    margin: "5px",
                    gap: "10px"
                }}>
                <Box sx={{
                    width: "100px",
                    height: "100px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    Paypal
                </Box>
                <Box sx={{
                    width: "100px",
                    height: "100px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    Klarna
                </Box>
                <Box sx={{
                    width: "100px",
                    height: "100px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    Online-<br/>Überweisung
                </Box>
                <Box sx={{
                    width: "100px",
                    height: "100px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    Rechnung
                </Box>
                <Box sx={{
                    width: "100px",
                    height: "100px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    Nachnahme
                </Box>
                </Box>
            </Box>
        </Box>
    )
}