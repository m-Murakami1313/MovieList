import { useState } from "react";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";

import styles from "./MovieDetail.module.scss";

export const MovieDetail = () => {
  const location = useLocation();
  const [result, setResult] = useState(location.state as { movie: any });

  return (
    <div className={styles.container}>
      <Box
        className={styles.box}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${result.movie?.backdrop_path}")`,
        }}
      >
        <h1 className={styles.title}>{result.movie.title} </h1>
        <p className={styles.date}>{result.movie.release_date}</p>
        <p className={styles.overview}>
          vote_average {result.movie.vote_average}
        </p>
        <p className={styles.overview}>{result.movie.overview}</p>
      </Box>
    </div>
  );
};
