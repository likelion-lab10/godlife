import { HashRouter, Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import Main from "../pages/Main";
import Recruitment from "pages/Recruit";
import Certificate from "../pages/Certificate";
import Filter from "pages/filter";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recruit" element={<Recruitment />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/dashboard" element={ } /> */}
        <Route path="/filter" element={<Filter />} />
        {/* <Route path="/search" element={ } /> */}
        <Route path="/certificate" element={<Certificate />} />
        {/* <Route path="/participate" element={ } /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
