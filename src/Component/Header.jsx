import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Yggdrasil</Link>
        <Link to="/asgard">Asgard</Link>
        <Link to="/midgard">Midgard</Link>
        <Link to="/vanaheim">Vanaheim</Link>
        <Link to="/jotunheim">Jotunheim</Link>
        <Link to="/alfheim">Alfheim</Link>
        <Link to="/svartalfheim">Svartalfheim</Link>
        <Link to="/niflheim">Niflheim</Link>
        <Link to="/muspelheim">Muspelheim</Link>
        <Link to="/helheim">Helheim</Link>
      </nav>
    </header>
  );
}

export default Header;
