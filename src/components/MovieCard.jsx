import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import {getMoviePoster} from "../utils/getMoviePoster"

export function MovieCard({ movie }) {
  const imageUrl=getMoviePoster(movie.poster_path,300);
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}