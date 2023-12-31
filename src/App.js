import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Nextpage from './Components/Nextpage';
import Ifyes from './Components/Ifyes/Ifyes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nextpage' element={<Nextpage />} />
        <Route path='/ifyes' element={<Ifyes />} />
      </Routes>
    </Router>
  );
}

export default App;
