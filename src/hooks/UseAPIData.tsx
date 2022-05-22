import { useCallback} from "react";



export const useAPIData = () => {
  

  const APIKEY = "?api_key=" + process.env.React_APP_MOVIE_API_KEY;
  const base_url = "https://api.themoviedb.org/3";
  const freeWord = "/movie/now_playing";
  const url = base_url + freeWord + APIKEY;

  const fetchData = useCallback( 
    async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data
    } catch (err) {
      console.error("ヘッダーの映画情報の取得に失敗しました");
    }
  },[]);

  return {fetchData}
}

