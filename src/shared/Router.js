import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import DashBoardPage from "../pages/DashBoardPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/dashboard" element={<DashBoardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
