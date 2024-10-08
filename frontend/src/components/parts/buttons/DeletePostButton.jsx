import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import DeleteDialog from "../Dialogs/DeleteDialog";
import DeleteIcon from "@mui/icons-material/Delete"
import React from "react";

export default function DeletePostButton({id, posts, setPosts, createdBy}){
    const [canDelete, setCanDelete] = useState(false);
    const [open, setOpen] = useState(false);
    const handleDeleteCheck = async() => {
        try {
            const config = {
                url: "http://localhost:3002/api/postAction/check",
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer: ${localStorage.getItem("token")}`
                },
            }
            const response = await axios(config);

            console.log(response.data.username, createdBy);
            if(response.data.username == createdBy) {
                setCanDelete(true);
            }
            else{
                setCanDelete(false);
            }
        }
        catch(e){
            console.log(e.response.data.message);
        }
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <>
        <Button onClick={handleDeleteCheck} variant="contained"><DeleteIcon/></Button>
        <DeleteDialog open={open} handleClose={handleClose} id={id} setPosts={setPosts} canDelete={canDelete}/>
        </>
    )
}