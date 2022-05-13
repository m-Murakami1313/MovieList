import { useState } from "react";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";

import styles from "./MovieDetail.module.scss";

export const MovieDetail = () => {
  const location = useLocation();
  const [result, setResult] = useState(location.state as { headerMovie: any });

  return (
    <div className={styles.container}>
      <Box
        className={styles.box}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${result.headerMovie?.backdrop_path}")`,
        }}
      >
        <h1 className={styles.title}>{result.headerMovie.title} </h1>
        <p className={styles.date}>{result.headerMovie.release_date}</p>
        <p className={styles.overview}>
          vote_average {result.headerMovie.vote_average}
        </p>
        <p className={styles.overview}>{result.headerMovie.overview}</p>
      </Box>
    </div>
  );
};
