import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

import styles from "./Header.module.scss";

type movieProps = {
  title?: string;
  name?: string;
  original_title?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Header = () => {
  const [headerMovie, setHeaderMovie] = useState<movieProps>({});

  const APIKEY = "?api_key=" + process.env.React_APP_MOVIE_API_KEY;
  const base_url = "https://api.themoviedb.org/3";
  const freeWord = "/movie/now_playing";
  const url = base_url + freeWord + APIKEY + "&page=1";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHeaderMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      })
      .catch((error) => console.log("ヘッダーの映画情報の取得に失敗しました"));
  }, []);
  console.log(headerMovie);
  return (
    <header
      className={styles.Banner}
      style={{
        backgroundPosition:"center center",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${headerMovie?.backdrop_path}")`,
      }}
    >
      <p className={styles.Title}>{headerMovie.original_title}</p>
      <p className={styles.OverView}>{headerMovie.overview}</p>
    </header>
  )
};
