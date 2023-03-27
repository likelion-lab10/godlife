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
        <Route path="/login" />
        <Route path="/recruit" element={<Recruitment />} />
        <Route path="/register" />
        <Route path="/dashboard" />
        <Route path="/filter" />
        <Route path="/search" />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/participate" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
