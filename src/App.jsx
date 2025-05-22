import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Componants/Navbar/Navbar"
import ShopCategory from "./Pages/ShopCategory"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      

      </BrowserRouter>
    </div>
     
  )
}

export default App
