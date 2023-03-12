import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import "./EnterPage.css";
import { createRoot } from "react-dom/client";
import { EnterPage } from "./EnterPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Redirect(){
    root.render(
        <EnterPage/>
    );}

export function LandingPage() {
  return (
  <div>
    <button onClick={Redirect} className="logout-btn">LOG OUT</button>
    <Search/>
    <MoviesGrid />
  </div>
  );
}