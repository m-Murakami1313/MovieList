import { memo, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAPIData } from "../../hooks/UseAPIData";

import styles from "./Header.module.scss";

type movieProps = {
  title?: string;
  name?: string;
  original_title?: string;
  backdrop_path?: string;
  overview?: string;
  id?: number;
};

export const Header = memo(() => {
  const [headerMovie, setHeaderMovie] = useState<movieProps>({});
  const { fetchData } = useAPIData();
  const navigate = useNavigate();

  useMemo(() => {
    const fetchAPI = async () => {
      const firstFetch = await fetchData();
      {
        firstFetch &&
          setHeaderMovie(
            firstFetch.results[
              Math.floor(Math.random() * firstFetch.results.length)
            ]
          );
      }
    };
    fetchAPI();
  }, []);

  return (
    <div
      onClick={() =>
        navigate(`/MovieList/movie/${headerMovie.id}`, {
          state: { movie: headerMovie },
        })
      }
    >
      {headerMovie.backdrop_path && (
        <header
          className={styles.Banner}
          style={{
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${headerMovie.backdrop_path}")`,
          }}
        >
          <p className={styles.Title}>{headerMovie.original_title}</p>
          {headerMovie.overview && (
            <p className={styles.OverView}>
              {headerMovie.overview.substring(0, 150) + "..."}
            </p>
          )}
        </header>
      )}
    </div>
  );
});
