
import { useState, useEffect } from "react";

import styles from "./List.module.scss"

export const List = ({title,fetchUrl}:any) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://api.themoviedb.org/3";
  const url = base_url + fetchUrl;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((error) => console.log("映画情報の取得に失敗しました"));
  }, []);
  
  return (
    <div className={styles.body}>
    <p className={styles.text}>{title}</p>
  <div className={styles.list}>
    {movies &&
      movies.map((movie: any) => (
        <div key={movie.id} className={styles.gridItems}>
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            className={styles.gridImage}
          />
        </div>
      ))}
  </div>
</div>
  )
}
