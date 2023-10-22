import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle = {
    marginRight: '20px', // Add spacing between the links
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" style={linkStyle}>Yggdrasil</Link>
        <Link to="/asgard" style={linkStyle}>Asgard</Link>
        <Link to="/midgard" style={linkStyle}>Midgard</Link>
        <Link to="/vanaheim" style={linkStyle}>Vanaheim</Link>
        <Link to="/jotunheim" style={linkStyle}>Jotunheim</Link>
        <Link to="/alfheim" style={linkStyle}>Alfheim</Link>
        <Link to="/svartalfheim" style={linkStyle}>Svartalfheim</Link>
        <Link to="/niflheim" style={linkStyle}>Niflheim</Link>
        <Link to="/muspelheim" style={linkStyle}>Muspelheim</Link>
        <Link to="/helheim" style={linkStyle}>Helheim</Link>
      </nav>
    </header>
  );
}

export default Header;
