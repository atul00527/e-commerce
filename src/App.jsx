import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Componants/Navbar/Navbar"
import Shop from "../src/Pages/shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory category="mens"/> }/>
          <Route path="/womens" element={<ShopCategory category="womens"/>}/>
          <Route path="/kids" element={<ShopCategory category="kids"/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path=":productId" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        
          
          
          
         
        </Routes>
      </BrowserRouter>
    </div>
     
  )
}

export default App
