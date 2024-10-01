import { TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from "react";

export default function Searchbar(){
    const [textInput, setTextInput] = useState([]);
    const searchtextRef = useRef();
    const getSearchInput = ()=>{
        
        try{
        
        const searchText = searchtextRef.current.searchbar.value;
        console.log(searchText)
        setTextInput(searchText)
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
        <div className="search" style={{
            position: "relative",
            width: "90%",
            display: "block",
            float: "left",
            borderRadius: "5px"
        }}>
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
                height: "10%",
                backgroundColor: "orange",
                borderLeft: "1px solid black"
            }}
                >
            <SearchIcon
                
            />
            </Button>
        </div>
    )
}