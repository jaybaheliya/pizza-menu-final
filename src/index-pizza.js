import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
                <Pizza
                    name="Focaccia"
                    ingredients="Bread with italian olive oil and rosemary"
                    photoName="pizzas/focaccia.jpg"
                    price={6}
                    soldOut="false"
                />
                <Pizza
                    name="Pizza Margherita"
                    ingredients="Tomato and mozarella"
                    photoName="pizzas/margherita.jpg"
                    price={10}
                    soldOut="false"
                />
                <Pizza
                    name="Pizza Spinaci"
                    ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                    photoName="pizzas/spinaci.jpg"
                    price={12}
                    soldOut="false"
                />
                <Pizza
                    name="Pizza Funghi"
                    ingredients="Tomato, mozarella, mushrooms, and onion"
                    photoName="pizzas/funghi.jpg"
                    price={12}
                    soldOut="false"
                />
                <Pizza
                    name="Pizza Salamino"
                    ingredients="Tomato, mozarella, and pepperoni"
                    photoName="pizzas/salamino.jpg"
                    price={15}
                    soldOut="true"
                />
                <Pizza
                    name="Pizza Prosciutto"
                    ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
                    photoName="pizzas/prosciutto.jpg"
                    price={18}
                    soldOut="false"
                />
            </div>
        </main>
    );
}

function Pizza(props) {
    console.log(props);
    // if (props.soldOut === "false") {
    //     return null;
    // }
    return (
        <div className="pizza">
            <img src={props.photoName} alt={props.name} />
            <div>
                <h3 style={{ color: "black" }}>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 3 + "€"}</span>
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
    isOpen = currentTime < "11:00" ? "Closed" : "Open";
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
