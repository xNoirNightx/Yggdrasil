import React from 'react';

const Yggdrasil = () => {
  const containerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
    backgroundSize: 'cover', // Adjust to cover the entire container
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to Yggdrasil</h1>
      <p>This is the realm</p>
      {/* Yggdrasil content */}
    </div>
  );
};

export default Yggdrasil;
