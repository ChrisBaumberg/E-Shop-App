import { Box, Button, Modal, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Settings({settingsOpen, setSettingsOpen, isLoggedIn}){
    
    const navigator = useNavigate();
    const handleOnRegister = ()=>{
        navigator("/register");
        setSettingsOpen(false);
    }
    const handleOnProfile = () => {
        navigator("/profile");
        setSettingsOpen(false);
    }
    return(
        <Modal
            open={settingsOpen}
            onClose={()=>setSettingsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
        <Box sx={{
            position: "absolute",
            backgroundColor: "aqua",
            right: "5%",
            top: "65px",
            width: "100px",
            border: "1px solid #012345",
            
            boxShadow: 24,
            p:4
        }}>
                {isLoggedIn?null: <Button onClick={handleOnRegister} style={{width: "100%", margin: "5px", backgroundColor: "red", color: "yellow"}}>Register</Button>}
                {isLoggedIn?<Button onClick={handleOnProfile} style={{ width: "100%", margin: "5px",backgroundColor: "red", color: "yellow"}}>Profile</Button>:null}
        </Box>
        </Modal>
    )
}