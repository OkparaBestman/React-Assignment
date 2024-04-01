import react, { useEffect, useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import "./home.css";

function Payment() {
  const { addCart } = useContext(CartContext);
  const [totalAmount, settotalAmount] = useState(0);
  useEffect(() => {
    const amount = addCart.map((item) => {
      return item.price;
    });

    settotalAmount(
      amount.reduce((totalCount, currentValue) => {
        return totalCount + currentValue;
      }, 0)
    );
  });

  return (
    <div className="receipt">
      <div
        style={{ color: "blue", fontWeight: "bold", justifyContent: "center" }}
      >
        Receipt
      </div>
      <p>Total Amount Paid = ${totalAmount}</p>
      <p style={{ color: "green" }}>Payment Success</p>
      <p>Print</p>
    </div>
  );
}
export default Payment;
