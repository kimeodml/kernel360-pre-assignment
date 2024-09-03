import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import MentorPage from './pages/MentorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MentorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
