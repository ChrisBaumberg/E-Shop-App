import {Box, Button, Modal, TextField} from "@mui/icons-material";
import { useRef } from "react";
import {v4 as uuidv4} from "uuid";
import { createProduct, getProductsFromBackend } from "../../../utils/AjaxHandler";

export default function ProductModal({open, setOpen, setProducts}){
    const formRef = useRef();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const form = formRef.current;
        const formData = new FormData();
        formData.append("id", uuidv4());
        formData.append("category", form.category.value);
        formData.append("title", form.title.value);
        formData.append("description", form.description.value);
    }

/*return(
    <>
        <Modal
            open={open}
            onClose=
    </>
)*/
}