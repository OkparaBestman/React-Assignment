import React, { useEffect, useState } from "react";
import "./home.css";
import {createContext, ReactNode,  useContext} from "react";


const shoppingCartContext = createContext({})
export function useShoppingCart(){
  return useContext(shoppingCartContext)
}


// type shoppingCartProviderProps = {
//   children: ReactNode
// }



export function shoppingCartProvider({children}){
  return (<shoppingCartContext.Provider value={{}}>
    {children}
  </shoppingCartContext.Provider>
  )
}

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

  useEffect(() => {
    const fetchUser = async () => {
      const respond = await fetch("https://dummyjson.com/products");
      const data = await respond.json();
      setData(data);
      console.log(data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className="Shop-face">
        <nav className="navbar">
          <h1 id="lg">LOGO</h1>
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
        </nav>

        <div className="items">
          {data.products?.map((item) => {
            return (
              <div className="items-child" key={item.id}>
                <img className="img" src= {item.thumbnail} alt="" width={200} height={200}/>
                <p>tittle:{item.title}</p>
                <p>description:{item.description}</p>
                <p>category:{item.category}</p>
                <p>brand:{item.brand}</p> 
                <p>rating:{item.rating}</p>
                <p>${item.price}</p>
                <p>off{item.discountPercentage}%</p>
                <button className="button">addCart{i}</button>
              </div>
            );
          })}
        </div>
      </div>

      <h1>my home</h1>
    </div>
  );
}

export default Home;
