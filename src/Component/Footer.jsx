import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Yggdrasil And The 9 Worlds. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
