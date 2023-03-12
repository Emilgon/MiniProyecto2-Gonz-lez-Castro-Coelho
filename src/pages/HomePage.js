import "./HomePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { EnterPage } from "./EnterPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Redirect(){
    root.render(
        <EnterPage/>
    );}
export function HomePage(){
    return(<>
    <h1 className="h1">Movies</h1>
    <div className="hero">
        <div className="hero-text">
            <button onClick={Redirect} className="start-btn">LET'S START!</button>
        </div>
     </div>
    </>
    );
}

