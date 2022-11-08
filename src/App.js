import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/shaered/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/shaered/footer/Footer';
import NotFound from './components/shaered/NotFound';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
