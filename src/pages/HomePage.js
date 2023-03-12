import "./HomePage.css";
import { createRoot } from "react-dom/client";
import { EnterPage } from "./EnterPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export function Redirect(){
    return(
        root.render(
            <EnterPage/>
        )
    )

}
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

