import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Yggdrasil from './Component/Yggdrasil';
import Asgard from './Component/Asgard'; // Import the Asgard component
import Midgard from './Component/Midgard'; // Import the Midgard component
import Vanaheim from './Component/Vanaheim'; // Import the Vanaheim component
import Jotunheim from './Component/Jotunheim'; // Import the Jotunheim component
import Alfheim from './Component/Alfheim'; // Import the Alfheim component
import Svartalfheim from './Component/Svartalfheim'; // Import the Svartalfheim component
import Niflheim from './Component/Niflheim'; // Import the Niflheim component
import Muspelheim from './Component/Muspelheim'; // Import the Muspelheim component
import Helheim from './Component/Helheim'; // Import the Helheim component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Yggdrasil />} /> {/* Set Yggdrasil as the homepage */}
        <Route path="/asgard" element={<Asgard />} />
        <Route path="/midgard" element={<Midgard />} />
        <Route path="/vanaheim" element={<Vanaheim />} />
        <Route path="/jotunheim" element={<Jotunheim />} />
        <Route path="/alfheim" element={<Alfheim />} />
        <Route path="/svartalfheim" element={<Svartalfheim />} />
        <Route path="/niflheim" element={<Niflheim />} />
        <Route path="/muspelheim" element={<Muspelheim />} />
        <Route path="/helheim" element={<Helheim />} />
        {/* Add routes for other realms here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
