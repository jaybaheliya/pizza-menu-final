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
        soldOut: false,
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
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <div className="pizzasWrapper">
                {pizzaData.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />

                    // <Pizza
                    //     name={pizza.name}
                    //     ingredients={pizza.ingredients}
                    //     price={pizza.price}
                    //     photoName={pizza.photoName}
                    //     soldOut={pizza.soldOut}
                    // />
                ))}

                {/* Static Add */}
                {/* <Pizza
                    name="Focaccia"
                    ingredients="Bread with italian olive oil and rosemary"
                    photoName="pizzas/focaccia.jpg"
                    price={6}
                    soldOut="false"
                />*/}
            </div>
        </main>
    );
}

function Pizza(props) {
    // console.log(props);

    let checkSold = props.pizzaObj.soldOut ? "soldOut" : "";

    return (
        <div className={"pizza " + checkSold}>
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3 style={{ color: "black" }}>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 3 + "€"}</span>
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

function Footer() {
    let isOpen = new Date().getHours();
    let isAM = isOpen < 12;
    let hours12Format = isOpen % 12 || 12;
    let currentTime = `${hours12Format}:${new Date().getMinutes()} ${
        isAM ? "AM" : "PM"
    }`;

    console.log(currentTime);
    isOpen = currentTime > "11:00" ? "Closed" : "Open";
    return (
        <footer className="footer">
            <b>{currentTime}</b> we're currently {isOpen}
        </footer>
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
