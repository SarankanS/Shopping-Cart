import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import Cart from "./pages/Cart.jsx"
import App from './App.jsx'
import { CartProvider } from "./context/CartContext"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> 
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
