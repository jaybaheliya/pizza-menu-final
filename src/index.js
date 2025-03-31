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

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        // <React.Fragment>
        <>
          <p>
            Autentic Italian cuisine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>

          <div className="pizzasWrapper">
            {pizzas.map((pizza) => (
              <Pizza pizzaObjb={pizza} key={pizza.name} />
            ))}
          </div>
        </>
      ) : (
        <p>
          Sorry currently we are woring on our menu, Please come back later :(
        </p>
      )}

      {/* {numPizzas > 0 && (
                <div className="pizzasWrapper">
                    {pizzas.map((pizza) => (
                        <Pizza pizzaObj={pizza} key={pizza.name} />
                    ))}
                </div>
            )} */}

      {/* // <Pizza
                    //     name={pizza.name}
                    //     ingredients={pizza.ingredients}
                    //     price={pizza.price}
                    //     photoName={pizza.photoName}
                    //     soldOut={pizza.soldOut}
                    // /> */}

      {/* Static Add */}
      {/* <Pizza
                    name="Focaccia"
                    ingredients="Bread with italian olive oil and rosemary"
                    photoName="pizzas/focaccia.jpg"
                    price={6}
                    soldOut="false"
                />*/}
    </main>
  );
}

function Pizza({ pizzaObjb }) {
  // console.log(props);
  // if (props.pizzaObjb.soldOut) return null;
  let checkSold = pizzaObjb.soldOut ? "soldOut" : "";

  return (
    <div className={"pizza " + checkSold}>
      <img src={pizzaObjb.photoName} alt={pizzaObjb.name} />
      <div>
        <h3 style={{ color: "black" }}>{pizzaObjb.name}</h3>
        <p>{pizzaObjb.ingredients}</p>
        <span>{pizzaObjb.price + 3 + "€"}</span>
      </div>
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

function Footer(numPizzas) {
  let currentHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  const checkShopStatus = currentHour >= openHour && currentHour <= closeHour;
  const isOpen = checkShopStatus ? "Open" : "Closed";

  if (!isOpen)
    return (
      <strong className="orderVisit">
        You can connect tomorrow from {openHour} to {closeHour}
      </strong>
    );

  return (
    <footer className="footer">
      {isOpen && (
        <Order isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
}

function Order({ isOpen, openHour, closeHour }) {
  return (
    <div>
      <blockquote className="orderQuote">We're currently {isOpen}</blockquote>
      <strong className="orderVisit">
        We're open until {closeHour}, Come visit us or order online.
      </strong>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
