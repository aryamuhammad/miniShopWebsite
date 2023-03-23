import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import DetailProduct from "./pages/DetailProduct"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"


function App() {

  return (
    <div className="App">
            <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<DetailProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
