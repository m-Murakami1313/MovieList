import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

import styles from "./Body.module.scss";

export const Body = () => {
  const [moviesList, setMoviesList] = useState<any>([]);

  const APIKEY = "?api_key=" + process.env.React_APP_MOVIE_API_KEY;
  const base_url = "https://api.themoviedb.org/3";
  const freeWord = "/movie/top_rated";
  const url = base_url + freeWord + APIKEY + "&page=1";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMoviesList(data.results);
      })
      .catch((error) => console.log("映画情報の取得に失敗しました"));
  }, []);
  return (
    <>
      <p>Top_Rated</p>
      <div className={styles.body}>
        {moviesList &&
          moviesList.map((movie: any) => (
            <div key={movie.id} className={styles.gridItems}>
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                className={styles.gridImage}
              />
            </div>
          ))}
      </div>
    </>
  );
};
