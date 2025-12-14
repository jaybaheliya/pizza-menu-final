import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillsetData = [
    { lang: "HTML", color: "red", bgColor: "yellow", emoji: "👍" },
    { lang: "CSS", color: "green", bgColor: "lime", emoji: "❤️" },
    { lang: "JS", color: "blue", bgColor: "aqua", emoji: "👍" },
    { lang: "React", color: "purple", bgColor: "fuchsia", emoji: "👍" },
    { lang: "Node", color: "black", bgColor: "gray", emoji: "👍" },
    { lang: "MongoDB", color: "brown", bgColor: "maroon", emoji: "👍" },
    { lang: "Express", color: "orange", bgColor: "gold", emoji: "👍" },
    { lang: "SQL", color: "teal", bgColor: "cyan", emoji: "👍" },
    { lang: "Git", color: "indigo", bgColor: "violet", emoji: "👍" },
    { lang: "GitHub", color: "black", bgColor: "gray", emoji: "👍" },
    { lang: "Jira", color: "black", bgColor: "gray", emoji: "👍" }
];


function App() {
    return <Card />;
}

function Card() {
    return (
        <div className="card">
            <Avatar />
            <Content />
            <ul className="skillset">
                {
                    skillsetData.map((skill)=>{
                        return(
                            <Skillset lang={skill.lang} color={skill.color} bgColor={skill.bgColor} emoji={skill.emoji} />
                        )
                    })
                }
                {/* <Skillset lang="HTML" color="red" bgColor="yellow" emoji="👍" /> */}
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
