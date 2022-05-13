import { memo, useState } from "react";
import { Box } from "@mui/system";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@mui/material";

import styles from "./MovieDetail.module.scss";

type movieProps = {
  title?: string;
  backdrop_path?: string;
  overview?: string;
  id?: number;
  release_date?: string;
  vote_average?: number;
};

export const MovieDetail = memo(() => {
  const location = useLocation();
  const [result, setResult] = useState(location.state as { movie: movieProps });

  return (
    <div className={styles.container}>
      <Box
        className={styles.box}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${result.movie.backdrop_path}")`,
        }}
      >
        <h1 className={styles.title}>{result.movie.title} </h1>
        <p className={styles.date}>{result.movie.release_date}</p>
        <p className={styles.overview}>
          vote_average {result.movie.vote_average}
        </p>
        <p className={styles.overview}>{result.movie.overview}</p>
        <Button className={styles.button}>
          <Link to="/">戻る</Link>
        </Button>
      </Box>
    </div>
  );
});
