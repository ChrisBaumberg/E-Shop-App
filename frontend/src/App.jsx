import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Headline from './components/parts/header/Headline'
import { Home } from './components/pages/Home'
import { WelcomePage } from './components/Main/WelcomePage'
import LoginBar from './components/parts/bars/LoginBar'

import readFile from './components/helpers/FileReader'
import CreateProductCard from './components/forms/CreateProductCard'
import AdminPage from './components/Main/admins/AdminPage'
import {useNavigate, BrowserRouter, Routes, Route} from "react-router-dom";
import ProductCard from './components/parts/cards/ProductCard'
import Register from './components/pages/Register';
import Login from './components/pages/Login'
import ResetPage from './components/pages/ResetPage'
import Profile from './components/pages/Profile'
//import companyLogo from "../public/img/Logo-Grey.svg"

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [resetAllowed, setResetAllowed] = useState(false);
  const [resetNumber, setResetNumber] = useState();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token){
      setLoggedIn(true);
    }
  },[])
  const handleLogout = () =>{
    setLoggedIn(false);
  }
  const handleLogin = () =>{
    setLoggedIn(true);
  }


  return (
    <>
    <Headline isLoggedIn={isLoggedIn}/>
    {/*<WelcomePage/>*/}
      {/*<AdminPage/>*/}
      {/*<CreateProductCard/>*/}
      {/*<Register/>*/}
      {/*<Home/>*/}
      {/*<Login/>*/}
      {/*<ResetPage/>*/}
      {/*<Profile/>*/}
      {/*<ProductCard/>*/}
      
            
     
    </>
  )
}

export default App
