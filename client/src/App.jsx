import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Services from "./pages/Services"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import AdminLogin from "./pages/AdminLogin"
import AdminMessages from "./pages/AdminMessages"
import AdminProtectedRoute from "./components/AdminProtectedRoute"
import SignOut from "./pages/SignOut"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/messages"
          element={
            <AdminProtectedRoute>
              <AdminMessages />
            </AdminProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
