import { TextField, Button, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from "react";

export default function Searchbar(){
    const [textInput, setTextInput] = useState();
    const searchtextRef = useRef();
    const getSearchInput = async()=>{
        
        try{
        
        const searchText = searchtextRef.current.searchbar.value;
        
        setTextInput(searchText)
        console.log(searchText)
        }
        catch(e){
            console.log("Failed getting searchtext\nError: ", e)
            
        }
    }
  
    
    function handleOnClick(){
        getSearchInput();
        console.log(textInput)
    }
    return(
        <Box className="search" style={{
            position: "relative",
            width: "90%",
            height: "70%",
            display: "block",
            float: "left",
            borderRadius: "5px"
        }} component="form" ref={searchtextRef}>
            <TextField
            sx={{
                width: "89%",
                height: "10%",
                backgroundColor: "white",
                //marginTop: "5px"
            }}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            name="searchbar"
           
            >

            
            </TextField>
            <Button onClick={handleOnClick}  sx={{
                width: "10%",
                height: "20%",
                backgroundColor: "orange",
                borderLeft: "1px solid black"
            }}
                >
            <SearchIcon
                
            />
            </Button>
        </Box>
    )
}