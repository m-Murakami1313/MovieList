import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetail } from "../pages/MovieDetail/MovieDetail";
import { Top } from "../pages/Top/Top";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MovieList/" element={<Top />} />
        <Route path="/MovieList/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
