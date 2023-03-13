import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";
import { Link } from "react-router-dom";
import { func } from "prop-types";
import { async } from "q";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [discover, setDiscover] = useState([])
  const [upcoming, setUpcoming] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page,setPage]=useState(1);
  const [hasMore, setHasMore]=useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies(prevMovies=>prevMovies.concat(data.results));
      setHasMore(data.page<data.total_pages)
      setIsLoading(false);
    });
  }, [search,page]);

  useEffect(()=> {
    setIsLoading(true);
    const discoverUrl = "/discover/movie"
    get(discoverUrl).then((data) => {
      setMovies(prevMovies=>prevMovies.concat(data.results));
      setDiscover(prevMovies=>prevMovies.concat(data.results));
      setHasMore(data.page<data.total_pages)
      setIsLoading(false);
    });
  }, []);

  useEffect(()=> {
    setIsLoading(true);
    const upcomingUrl = "/movie/upcoming"
    get(upcomingUrl).then((data) => {
      setUpcoming(prevMovies=>prevMovies.concat(data.results));
      setHasMore(data.page<data.total_pages)
      setIsLoading(false);
    });
  }, []);
  

  const showUpcoming = async () =>{
    return(
      setMovies(upcoming)
      );
  }

  const showDiscover = async () =>{
    return(
      setMovies(discover)
    );
  }

  if (!isLoading && movies.length===0){
    return <Empty/>;
  }

  console.log(upcoming)

  return (
    <InfiniteScroll 
      dataLength={movies.length} 
      hasMore={true} 
      next={()=>setPage((prevPage)=>prevPage+1)}
      loader={<div>Loading...</div>}
    >
      <div className={styles.buttons}>
        <Link to ={"/"} > 
          <button onClick={showDiscover} className={styles.button}> Descubrir películas </button>
        </Link> 
        <Link to ={"/movie/upcoming"} > 
          <button  onClick={showUpcoming} className={styles.button}> Próximos estrenos </button>
        </Link> 
      </div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}