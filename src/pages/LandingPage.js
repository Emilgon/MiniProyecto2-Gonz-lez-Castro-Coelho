import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import "./EnterPage.css";


export function LandingPage() {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}