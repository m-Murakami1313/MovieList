import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./List.module.scss";
import { useHandlePageNumber } from "../../hooks/UseHandlePageNumber";

export const List = ({ title, fetchUrl }: any) => {
  const [movies, setMovies] = useState([]);

  const { pageNumber, handleNextPage, handlePreventPage } =
    useHandlePageNumber();

  const navigate = useNavigate();

  const base_url = "https://api.themoviedb.org/3";
  const url = base_url + fetchUrl + `&page=${pageNumber}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log("映画情報の取得に失敗しました");
      }
    };
    fetchData();
  }, [pageNumber]);

  return (
    <div className={styles.body}>
      <p className={styles.text}>{title}</p>
      <div className={styles.list}>
        {pageNumber >= 2 && <Button onClick={handlePreventPage}>戻る</Button>}
        {movies &&
          movies.map((movie: any) => (
            <div
              key={movie.id}
              className={styles.gridItems}
              onClick={() =>
                navigate(`/movie/${movie.id}`, {
                  state: { movie: movie },
                })
              }
            >
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                className={styles.gridImage}
              />
            </div>
          ))}
        <Button onClick={handleNextPage}>追加</Button>
      </div>
    </div>
  );
};
