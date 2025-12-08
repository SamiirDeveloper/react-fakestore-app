import { createContext, useState } from "react";

export const Cart = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <Cart.Provider value={{ cart, addToCart }}>
      {children}
    </Cart.Provider>
  );
}