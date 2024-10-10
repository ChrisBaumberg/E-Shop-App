import {Box} from "@mui/material";
import LoginBar from "../bars/LoginBar";
import Searchbar from "../bars/Searchbar";
import { Link } from "react-router-dom";

{/*Headline */}

export default function Headline({size}){

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "start",
            gap: "10px",
            marginBottom: "25px",
            backgroundColor: "green",
            height: "56px"

    }}>
        {/*<Link to ="/">*/}
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5px",
            cursor: "pointer",
            border: "1px solid black"
        }} >
        <img src = {""} alt={"Firmenlogo"}/>
    </Box>
    {/*</Link>*/}
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