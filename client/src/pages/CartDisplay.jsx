import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

function CartDisplay() {
  const { addCart } = useContext(CartContext);
  return (
    <div>
      <div style={{color:"Brown"}}>CartDisplay</div>
      <div>
        {addCart.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.thumbnail} alt="item.tittle" />
              <h1>{item.title}</h1>
              <h1>${item.price}</h1>
              <hr />
            </div>
          );
        })}
<Link to={"/pay"}><p>Makepayment $</p></Link>
      </div>
      ;
    </div>
  );
}

export default CartDisplay;
