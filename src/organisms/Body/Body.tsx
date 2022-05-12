import { useState } from "react";

import styles from "./Body.module.scss";
import { List } from "../../UI/List/List";

export const Body = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleNextPage: () => void = () => {
    setPageNumber(pageNumber + 1);
  };
  const handlePreventPage: () => void = () => {
    setPageNumber(pageNumber - 1);
  };

  const API_KEY = process.env.React_APP_MOVIE_API_KEY;
  const requests = {
    feachTopRated: `/movie/top_rated?api_key=${API_KEY}&page=${pageNumber}`,
    feachAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    feachComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    feachHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    feachFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  };

  return (
    <div>
      <List
        title="TopRated"
        fetchUrl={requests.feachTopRated}
        handleNextPage={handleNextPage}
        handlePreventPage={handlePreventPage}
        pageNumber={pageNumber}
      />
      <List title="Action" fetchUrl={requests.feachAction} />
      <List title="Comedy" fetchUrl={requests.feachComedy} />
      <List title="Horror" fetchUrl={requests.feachHorror} />
      <List title="Fantasy" fetchUrl={requests.feachFantasy} />
    </div>
  );
};
