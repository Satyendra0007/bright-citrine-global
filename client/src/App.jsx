import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Services from "./pages/Services"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
