import { useState, useEffect, memo } from "react";

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
  const url = base_url + freeWord + APIKEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setHeaderMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      } catch (err) {
        console.error("ヘッダーの映画情報の取得に失敗しました");
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      {headerMovie && (
        <header
          className={styles.Banner}
          style={{
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${headerMovie?.backdrop_path}")`,
          }}
        >
          <p className={styles.Title}>{headerMovie.original_title}</p>
          <p className={styles.OverView}>{headerMovie.overview}</p>
        </header>
      )}
    </div>
  );
};
