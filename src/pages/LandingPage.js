import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import "./EnterPage.css";
import { useQuery } from "../hooks/useQuery";
import { Redirect } from "react-router-dom";
export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");
  return (
    <div>
      <button onClick={Redirect} className="logout-btn">LOG OUT</button>
      <Search />
      <MoviesGrid key={search} search={search}/>
    </div>
  );
}