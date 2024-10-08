import { Button } from "@mui/material";
import {Box} from "@mui/system";
//NavigateBar
import NavigateBar from "../bars/Navigationbar";
import React from 'react';
import { useState } from "react";


export default function ClickExtendButton({element, text, handleClick, handleParam, id, setPosts, posts, handleLogout} ){
    return(
        <>
        <Box
        sx={{
            display: "flex"
        }}
        >
            <Button onClick={(e)=> handleParam ? handleClick(handleParam): handleClick(id, posts, setPosts)

            }>
                {element}
            </Button>
            {text && <p
                style={{
                    fontSize: "12px",
                    color:"text.primary",
                    textAlign: "center"
                }}
                >{text}</p>}
        </Box>
        {handleParam && <NavigateBar handleLogout={handleLogout}/>}
        </>
    )
}