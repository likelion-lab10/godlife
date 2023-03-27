import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Recruitment from "pages/Recruit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificate from "../pages/Certificate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/recruit" element={<Recruitment />} />
        <Route path="/register" element={<RegisterPage /> } />
        <Route path="/dashboard" element={ } />
        <Route path="/filter" element={ } />
        <Route path="/search" element={ } />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/participate" element={ } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
