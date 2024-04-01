import React, { useEffect, useState } from "react";
import "./home.css";
import { createContext, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onClick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function Home() {
  const [data, setData] = useState([]);

  const { addCart, setAddCart } = useContext(CartContext);

  useEffect(() => {
    const fetchUser = async () => {
      const respond = await fetch("https://dummyjson.com/products");
      const data = await respond.json();
      setData(data);
      console.log(data);
    };
    fetchUser();
  }, []);

  function addToCart(item) {
    setAddCart((previous) => {
      return [...previous, item];
    });
  }

  return (
    <div>
      <div className="Shop-face">
        <nav className="navbar">
          <h1>BestStore</h1>
          <FontAwesomeIcon icon={faHouse} />
          <ul className="ul-list">
            <li>Store</li>
            <li>Sell</li>
            <li>
              <form>
                <label>
                  Search for products:
                  <input type="text" />
                </label>
              </form>{" "}
            </li>
            <li>
              <button onclick="myFunction()" class="dropbtn">
                Help
                <div
                  onClick={myFunction}
                  id="myDropdown"
                  class="dropdown-content"
                >
                  <a href="#">ContactUs</a>
                  <a href="#">Track my id</a>
                  <a href="#">FAQs</a>
                </div>
              </button>
            </li>
          </ul>

          <h3>login</h3>
          <h3>signup</h3>

          <FontAwesomeIcon icon={faCartShopping} />
        </nav>
        <div>
          <p
            style={{ color: "blue" }}
          >{`Number of items in cart is ${addCart.length}`}</p>
          <Link to={"/showcart"}>
            <p className="cart-move," style={{ color: "blue" }}>
              Go to cart
            </p>
          </Link>
        </div>
        <div className="items">
          {data.products?.map((item) => {
            return (
              <div className="items-child" key={item.id}>
                <img
                  className="img"
                  src={item.thumbnail}
                  alt=""
                  width={200}
                  height={200}
                />
                <p>tittle:{item.title}</p>
                <p>description:{item.description}</p>
                <p>category:{item.category}</p>
                <p>brand:{item.brand}</p>
                <p>rating:{item.rating}</p>
                <p>${item.price}</p>
                <p>off{item.discountPercentage}%</p>
                <button
                  className="button"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  addCart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
