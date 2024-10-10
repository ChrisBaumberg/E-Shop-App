import { Box, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";


export default function Profile(){
    const [prename, setPrename] = useState();
    const [familyname, setFamilyname] = useState();
    const [street, setStreet] = useState();
    const [houseNumber, setHouseNumber] = useState();
    const [postCityCode, setPostCityCode] = useState();
    const [city, setCity] = useState();

    const formRef = useRef();

    const getUserAdress = async () =>{
        const adressRef= formRef.current;
        const prename = adressRef.prename.value;
        const familyname = adressRef.familyname.value;
        const street = adressRef.street.value;
        const houseNumber = adressRef.houseNumber.value;
        const cityCode= adressRef.postCityCode.value;
        const city = adressRef.city.value;
        setPrename(prename);
        setFamilyname(familyname);
        setStreet(street);
        setHouseNumber(houseNumber);
        setPostCityCode(cityCode);
        setCity(city);
    }

    const handleAddClick = (e) =>{
        e.preventDefault;
        getUserAdress();
        console.log(`Vorname: ${prename}, Nachname: ${familyname}, Straße: ${street} ${houseNumber}, PLZ, Stadt: ${postCityCode} ${city}`)
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
            }} component="form" ref={formRef}>
            <TextField id="outlined-basic" label="Vorname" name="prename"/>
            <TextField id="outlined-basic" label="Nachname" name="familyname"/>
            <TextField id="outlined-basic" label="Strasse" name="street"/>
            <TextField id="outlined-basic" label="Hausnummer" type="number" name="houseNumber"/>
            <TextField id="outlined-basic" label="Postleitzahl" name="postCityCode"/>
            <TextField id="outlined-basic" label="Stadt" name="city"/>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems:"center", justifyContent:"center"
            }}>
            <Button onClick={handleAddClick} style={{width: "200px", backgroundColor: "red", textAlign:"center", }}>
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