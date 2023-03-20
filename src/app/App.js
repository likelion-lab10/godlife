import Recruitment from "pages/Recruit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" />
        <Route path="/recruit" element={<Recruitment />} />
        <Route path="/register" />
        <Route path="/dashboard" />
        <Route path="/filter" />
        <Route path="/search" />
        <Route path="/certificate" />
        <Route path="/participate" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
