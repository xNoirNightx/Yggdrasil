import React from 'react';
import backgroundImage from '/public/background.jpg'; 

const Yggdrasil = () => {
  const backgroundStyle = {
    backgroundImage: `url("/public/background.jpg")`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <h1>Welcome to Yggdrasil</h1>
      <p>This is the realm</p>
      {/* Add content and functionality specific to Yggdrasil here */}
    </div>
  );
};

export default Yggdrasil;
