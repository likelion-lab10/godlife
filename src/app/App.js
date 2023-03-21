import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Category from '../components/Category';
import Filter from '../pages/filter';
import ChallengeList from '../components/ChallengeList';
import exampleData from '../data/exampleData';

function Challenge() {
  const { id } = useParams();
  
  return <div>Challenge {id}</div>;
}

function App() {
  // const basename = `/category`;
  

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path=":id" element={<Challenge />} />
          {/* <Route path="/login" element={ } />
          <Route path="/recruit" element={ } />
          <Route path="/register" element={ } />
          <Route path="/dashboard" element={ } />
          <Route path="/filter" element={ } />
          <Route path="/search" element={ } />
          <Route path="/certificate" element={ } />
          <Route path="/participate" element={ } /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;