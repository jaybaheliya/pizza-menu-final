import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return <Card />;
}

function Card() {
    return (
        <div className="card">
            <Avatar />
            <Content />
            <ul className="skillset">
                <Skillset lang="HTML" color="red" bgColor="yellow" emoji="👍" />
                <Skillset lang="CSS" color="green" bgColor="lime" emoji="❤️" />
                <Skillset lang="JS" color="blue" bgColor="aqua" emoji="👍" />
                <Skillset lang="React" color="purple" bgColor="fuchsia" emoji="👍" />
                <Skillset lang="Node" color="black" bgColor="gray" emoji="👍" />
                <Skillset lang="MongoDB" color="brown" bgColor="maroon" emoji="👍" />
                <Skillset lang="Express" color="orange" bgColor="gold" emoji="👍" />
                <Skillset lang="SQL" color="teal" bgColor="cyan" emoji="👍" />
                <Skillset lang="Git" color="indigo" bgColor="violet" emoji="👍" />
                <Skillset lang="GitHub" color="black" bgColor="gray" emoji="👍" />
                <Skillset lang="Jira" color="black" bgColor="gray" emoji="👍" />
            </ul>
        </div>
    );
}

function Avatar() {
    return <img src="./assets/image/dd.jpg" alt="" />;
}

function Content() {
    return (
        <div>
            <div className="flex">
                <h2>Jwala baheliya</h2>
                <h3 style={{ fontStyle: "italic" }}>Frontend Developer</h3>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                expedita dicta laboriosam sapiente delectus possimus ab
                praesentium tempore sequi repellat. Exercitationem recusandae
                quam eaque sed fuga ipsa dicta nostrum fugiat!
            </p>
        </div>
    );
}

function Skillset(props) {
    return (
        <li style={{ color: props.color, backgroundColor: props.bgColor }}>
            {props.lang} : {props.emoji}
        </li>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
