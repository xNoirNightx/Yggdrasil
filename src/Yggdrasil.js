import React from 'react';
import { Link } from 'react-router-dom';

const Yggdrasil = () => {
  return (
    <div>
      <h1>Welcome to Yggdrasil</h1>
      <img src="yggdrasil.jpg" alt="Yggdrasil" />

      <div className="world-buttons">
        <Link to="/world/asgard">Asgard</Link>
        <Link to="/world/midgard">Midgard</Link>
        <Link to="/world/vanaheim">Vanaheim</Link>
        <Link to="/world/jotunheim">Jotunheim</Link>
        <Link to="/world/alfheim">Alfheim</Link>
        <Link to="/world/svartalfheim">Svartalfheim</Link>
        <Link to="/world/niflheim">Niflheim</Link>
        <Link to="/world/muspelheim">Muspelheim</Link>
        <Link to="/world/helheim">Helheim</Link>
      </div>
    </div>
  );
};

export default Yggdrasil;
