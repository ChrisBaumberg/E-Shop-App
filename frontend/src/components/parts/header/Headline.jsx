import {Box} from "@mui/material";
import LoginBar from "../bars/LoginBar";
import Searchbar from "../bars/Searchbar";
import { Link, useNavigate } from "react-router-dom";
//import companyLogo from "../../../../public/img/Company-Logo.svg"

{/*Headline */}

export default function Headline({size}){
    const navigator = useNavigate();
    const handleLogoClick = () =>{
        navigator("/")
    }

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "start",
            gap: "10px",
            marginBottom: "25px",
            border: "1px solid black",
            borderRadius: "10px",
            height: "56px"

    }}>
        
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5px",
            cursor: "pointer",
            border: "1px solid black"
        }} >
            
        <img src = {""} alt={"Firmenlogo"} style={{maxHeight: "50px"}}onClick={handleLogoClick}/>
       
    </Box>
    
    <Box sx={{
        display:"flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "80%"
    }}>
        <Box sx={{
            paddingLeft: "10px",
            width: "100%"
        }}>
        <Searchbar sx={{
            height: "100%",
            marginLeft: "-200px"
        }}/>
        </Box>
    
</Box>
        <Box sx style={{
            color: "text.primary",
            backgroundColor: "background.default",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        }}>
            <LoginBar/>
        </Box>
        </Box>
    )
}