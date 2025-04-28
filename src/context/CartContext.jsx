import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product, quantity) => {
      setCartItems(prev => {
        const exists = prev.find(item => item.id === product.id);
        if (exists) {
          return prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prev, { ...product, quantity }];
        }
      });
    };
  
    const value = {
      cartItems,
      addToCart,
    };
  
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  };