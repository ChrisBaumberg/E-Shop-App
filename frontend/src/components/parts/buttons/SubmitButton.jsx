import { Button } from "@mui/material";
import React from "react";

export default function SubmitButton({text, postitionValue, onHandleClick}){
    return(
        <Button
            onClick={onHandleClick}
            variant="text"
            sx={{
                width: "10vw",
                height: "80%",
                backgroundColor: "success.main",
                color: "text.primary",
                borderRadius: "15%",
                top: "10%",
                position: postitionValue ? postitionValue : "relative"
            }}>
                {text}
            </Button>
    )
}