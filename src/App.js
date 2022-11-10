import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/shaered/navbar/Navbar';
import Home from './components/home/Home';
import NotFound from './components/shaered/NotFound';
import AboutUs from './components/aboutUs/AboutUs';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs/>} />


        <Route path="*" element={<NotFound />} />
      </Routes>

      
    </div>
  );
}

export default App;
