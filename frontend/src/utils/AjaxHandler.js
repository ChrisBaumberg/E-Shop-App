import React from "react";
import axios from "axios";
import showNotifications from "../components/Notifications/showNotifications";


export const getProductsFromBackend = async(setProducts) =>{
    try{
        const response = await axios ("http://localhost:3003/api/products");
        setProducts(response.data);    
    }
    catch(error){
        console.log(error)
    }
}

export const createProduct = async (data) => {
    const token = localStorage.getItem("token");
    try{
        const config={
            url: "http://localhost:3003/api/products",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                "authorization": `Bearer ${token}`
            },
            data: data,
        };
        const response = await axios(config);
        showNotification(response.data.message, "normal");
        if (response.status !== 201){
            showNotification("Client Post Error","red");
        }
    }
    catch(error){
        console.log(error)
    }
}