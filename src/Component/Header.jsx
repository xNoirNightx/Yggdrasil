import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle = {
    color: 'white',
    fontSize: '30px',
    marginRight: '30px',
    textDecoration: 'none',
    position: 'relative',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: 'black',
    padding: '10px 0',
  };

  const rainbowGlow = {
    position: 'absolute',
    content: '""',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF)',
    zIndex: -1,
    borderRadius: '4px',
    transition: 'width 0.3s ease-in-out',
  };

  return (
    <header className="header">
      <nav style={navStyle} className="navbar">
        <Link to="/" style={linkStyle}>
          Yggdrasil
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/asgard" style={linkStyle}>
          Asgard
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/midgard" style={linkStyle}>
          Midgard
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/vanaheim" style={linkStyle}>
          Vanaheim
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/jotunheim" style={linkStyle}>
          Jotunheim
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/alfheim" style={linkStyle}>
          Alfheim
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/Nidavellir" style={linkStyle}>
          Nidavellir
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/niflheim" style={linkStyle}>
          Niflheim
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/muspelheim" style={linkStyle}>
          Muspelheim
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/helheim" style={linkStyle}>
          Helheim
          <span style={rainbowGlow}></span>
        </Link>
        <Link to="/worldtree" style={linkStyle}>
          WorldTree
          <span style={rainbowGlow}></span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
