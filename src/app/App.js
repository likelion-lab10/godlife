import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path="/login" element={ } />
        <Route path="/recruit" element={ } />
        <Route path="/register" element={ } />
        <Route path="/dashboard" element={ } />
        <Route path="/filter" element={ } />
        <Route path="/search" element={ } />
        <Route path="/certificate" element={ } />
        <Route path="/participate" element={ } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
