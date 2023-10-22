import React from 'react';

function Alfheim() {
    const containerStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/AlfheimB.jpg)`,
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
    <div>
      <h1>Welcome to Alfheim</h1>
      <p>This is the world of light elves, associated with beauty and light.</p>
      {/* Add content and functionality specific to Alfheim here */}
    </div>
  );
}

export default Alfheim;
