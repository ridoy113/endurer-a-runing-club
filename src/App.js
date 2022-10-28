import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/shaered/navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl">
        Hello world!
      </h1>
      <Routes>
        <Route path="/" element="" />
      </Routes>

    </div>
  );
}

export default App;
