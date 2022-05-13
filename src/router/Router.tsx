import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetail } from "../pages/MovieDetail/MovieDetail";
import { Top } from "../pages/Top/Top";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
