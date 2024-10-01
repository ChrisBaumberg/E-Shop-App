import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Headline from './components/parts/header/Headline'
import { Home } from './pages/Home'
import { WelcomePage } from './components/Main/WelcomePage'
import LoginBar from './components/parts/bars/LoginBar'
import ProductPage from './pages/ProductPage'
import readFile from './components/helpers/FileReader'
import CreateProductCard from './components/forms/CreateProductCard'
import AdminPage from './components/Main/admins/AdminPage'
import {useNavigate, BrowserRouter, Routes, Route} from "react-router-dom";
import ProductCard from './components/parts/cards/ProductCard'
//import companyLogo from "../public/img/Logo-Grey.svg"

function App() {
  const [companyLogo, setCompanyLogo] = useState(/*["../public/img/Logo-Grey.svg"]*/)  
  const [productPicture, setProductPicture] = useState(["../public/img/Coca-Cola_klein.jpg"])
  const [title, setTitle] = useState(["Coca Cola"])
  const [description, setDescription] = useState(["Dose, koffeinhaltige Limonade"])
  const [price, setPrice] = useState(["0.25"])
  const [category, setCategory] = useState(["Drink desposit"])
  
  const [size, setSize] = useState(["l"]);
  const [comparePrice, setComparePrice] = useState(["0.75"]);
  const [productSize, setProductSize] = useState(["0,33"]);

  return (
    <>
    <Headline companyLogo={companyLogo}/>
    {/*<WelcomePage/>*/}
      {/*<AdminPage/>*/}
      <CreateProductCard/>
      
      {/*<Home/>*/}
       {/*<ProductPage title={title} imageUrl={productPicture} description={description} price={price} category={category} size={size} productSize={productSize} comparePrice={comparePrice}/>*/}
       {/*<ProductCard title={title} imageUrl={productPicture} description={description} price={price} category={category} size={size} productSize={productSize} comparePrice={comparePrice}/>*/}

            
     
    </>
  )
}

export default App
