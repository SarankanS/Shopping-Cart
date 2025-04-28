import { Fragment, useState } from 'react'
import Navbar from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./styles/app.css"



function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App
