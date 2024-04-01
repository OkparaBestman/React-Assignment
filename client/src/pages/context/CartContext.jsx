import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [addCart, setAddCart] = useState([]);
  return (
    <CartContext.Provider value={{ addCart, setAddCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
