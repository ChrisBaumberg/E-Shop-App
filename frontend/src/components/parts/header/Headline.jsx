import {Box} from "@mui/material";
import LoginBar from "../bars/LoginBar";
import Searchbar from "../bars/Searchbar";

{/*Headline */}

export default function Headline({size, companyLogo}){

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "start",
            gap: "10px",
            marginBottom: "25px",
            backgroundColor: "green"
    }}>
        <Box sx={{
            display: "flex"
        }} >
        <img src = {companyLogo} alt={"Firmenlogo"}/>
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