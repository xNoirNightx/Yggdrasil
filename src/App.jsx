import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Yggdrasil from './Component/Yggdrasil'; // Import the Yggdrasil component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Yggdrasil />} /> {/* Set Yggdrasil as the homepage */}
        {/* Add routes for other worlds */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;