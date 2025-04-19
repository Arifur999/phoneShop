import React, { useEffect, useState } from "react";
import { CartContext } from "./Context";
import { getCart } from "../utility/Utility";

const CardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(()=>{
setCart(getCart())
  },[])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;
