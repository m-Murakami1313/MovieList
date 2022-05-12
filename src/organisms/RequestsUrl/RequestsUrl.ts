
const API_KEY = process.env.React_APP_MOVIE_API_KEY;

export const requests ={
  feachTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  feachAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  feachComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  feachHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  feachFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
};