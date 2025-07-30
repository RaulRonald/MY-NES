import { BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </HashRouter>
  );
}

export default App;