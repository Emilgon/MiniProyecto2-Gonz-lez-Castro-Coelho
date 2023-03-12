import { Link } from "react-router-dom";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import "./EnterPage.css";

function Redirect(){
  window.location.reload(false);
}

function Upcoming(){

}

export function LandingPage() {
  return (
  <div>
    <button onClick={Redirect} className="logout-btn">LOG OUT</button>
    <Search />
    <MoviesGrid />
  </div>
  );
}