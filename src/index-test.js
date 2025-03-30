import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Company.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  console.log(pizzas);
  
//   const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      {
        numPizzas > 0 ?(
      pizzas.map((piz)=>(
        <Pizza pizzaObjectJwala={piz} key={piz.name}/>
      ))):(
        <p>We are working on it</p>
      )
      }
    </main>
  );
}

function Pizza(jbProps) {
  return (
    <div className={"pizza"}>
      <img
        src={jbProps.pizzaObjectJwala.photoName}
        alt={jbProps.pizzaObjectJwala.name}
      />
      <div>
        <h3 style={{ color: "black" }}>{jbProps.pizzaObjectJwala.name}</h3>
        <p>{jbProps.pizzaObjectJwala.ingredients}</p>
        <span>{jbProps.pizzaObjectJwala.price + 3 + "€"}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHore = 22;
  const checkShopStatus = hour >= openHour && hour <= closeHore;
  console.log(checkShopStatus);

  return (
    <footer>
      {checkShopStatus ? "We're currently open" : "We're currently closed"}
    </footer>
    // <p>Show is {checkShopStatus=true:'Open'?'close'}</p>
    // <footer>All RIghts are reserved 2025 to JB</footer>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
