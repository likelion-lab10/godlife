import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={} />
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/recruit" element={ } />
        <Route path="/register" element={<RegisterPage /> } />
        <Route path="/dashboard" element={ } />
        <Route path="/filter" element={ } />
        <Route path="/search" element={ } />
        <Route path="/certificate" element={ } />
        <Route path="/participate" element={ } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
