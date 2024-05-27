import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Menu from './pages/Menu'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/menu" element={<Menu />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
