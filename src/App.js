import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/shaered/navbar/Navbar';
import Home from './components/home/Home';


function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
