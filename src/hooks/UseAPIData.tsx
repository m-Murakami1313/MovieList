import { useCallback } from "react";

type dataTypes = {
  page: number;
  results: 
    {
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      overview: string;
      poster_path: string;
      release_date: string;
      title: string;
      vote_average: number;
    }[];
};

export const useAPIData = () => {
  const APIKEY = "?api_key=" + process.env.React_APP_MOVIE_API_KEY;
  const base_url = "https://api.themoviedb.org/3";
  const freeWord = "/movie/now_playing";
  const url = base_url + freeWord + APIKEY;

  const fetchData:() =>Promise<dataTypes | undefined> = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data:dataTypes = await response.json();
      return data;
    } catch (err) {
      console.error("ヘッダーの映画情報の取得に失敗しました");
    }
  }, []);

  return { fetchData };
};
