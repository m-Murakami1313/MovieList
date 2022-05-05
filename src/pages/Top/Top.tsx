import { useState,useEffect } from "react";

import styles from "./Top.module.scss";

export const Top = () => {
  const [moviesList, setMoviesList] = useState<any>([]);

  const APIKEY = "?api_key=" + process.env.React_APP_MOVIE_API_KEY;
  const base_url ="https://api.themoviedb.org/3"
  const freeWord="/movie/top_rated"
  const url= base_url+freeWord+APIKEY+"&page=1"

  useEffect(()=>{
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMoviesList(data.results);
      })
      .catch((error) => console.log("映画情報の取得に失敗しました"));
  },[])
console.log(url);
console.log(moviesList);
  
  return (
  <div className={styles.Top}>
    {moviesList && moviesList.map((movie:any)=>(
        <div key={movie.id}>
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
         <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
        </div>
      )
    )}
    <div>
      <img src={`${base_url}/wPU78OPN4BYEgWYdXyg0phMee64.jpg`}/>
    </div>
  </div>
  )
};
