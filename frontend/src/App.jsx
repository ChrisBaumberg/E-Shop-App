import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Headline from './components/parts/header/Headline'
import { Home } from './components/pages/Home'
import { WelcomePage } from './components/Main/WelcomePage'


import readFile from './components/helpers/FileReader'
import CreateProductCard from './components/forms/CreateProductCard'
import AdminPage from './components/Main/admins/AdminPage'
import {useNavigate, BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ProductCard from './components/parts/cards/ProductCard'
import Register from './components/pages/Register';
import Login from './components/pages/Login'
import ResetPage from './components/pages/ResetPage'
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings'

//import companyLogo from "../public/img/Logo-Grey.svg"

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [resetAllowed, setResetAllowed] = useState(false);
  const [resetNumber, setResetNumber] = useState();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const onModalOpen = () => setSettingsOpen(!settingsOpen);
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
    
    <BrowserRouter>
    <Headline isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path ="/" element={<WelcomePage/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/login" element={<Login handleLogin={handleLogin}/>}/>
        <Route path = "/productCard" element={<ProductCard/>}/>
        <Route path="/reset/askEmail" element={<ResetPage text={"Type in your Email to reset password"} resetAllowed={resetAllowed} setResetAllowed={setResetAllowed} resetNumber={resetNumber} setResetNumber={setResetNumber}/>}></Route>
              <Route path="/reset/verify" element={<ResetPage text={
              "Type in the code you received via Email"
            } resetAllowed={resetAllowed} setResetAllowed={setResetAllowed} resetNumber={resetNumber} setResetNumber={setResetNumber}
            />}></Route>
            <Route path="/reset/newPassword" element={resetAllowed ?<ResetPage text={
              "Type in your new Password"
            }/> : <Navigate to="/login"/>}></Route>
            <Route path="/settings" element={<Settings/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/newproduct" element={<CreateProductCard/>}/>
 
      {/*<Home/>*/}
     
      <Route path = "/profile" element={<Profile/>}/>

      
      
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
