import React, { useState } from "react";

function Midgard() {
  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const imageStyle = {
    width: "50%",
  };

  const headerStyle = {
    marginBottom: "20px",
  };

  const imagesContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const leftImageStyle = {
    flex: 1,
    cursor: "pointer",
  };

  const rightImageStyle = {
    flex: 1,
    cursor: "pointer",
  };

  const [leftImageTextVisible, setLeftImageTextVisible] = useState(false);
  const [rightImageTextVisible, setRightImageTextVisible] = useState(false);

  const toggleLeftImageText = () => {
    setLeftImageTextVisible(!leftImageTextVisible);
    setRightImageTextVisible(false);
  };

  const toggleRightImageText = () => {
    setRightImageTextVisible(!rightImageTextVisible);
    setLeftImageTextVisible(false);
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Welcome to Midgard</h1>
        <p>This is the realm of humans, where mortals reside.</p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/MidgardBG.png`}
            alt="Left Image"
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Midgard is the realm of humans in Norse mythology. It is often referred to as "Middle Earth" and is inhabited by mortals. Midgard is situated between the realms of the gods and the other creatures of the cosmos. It is connected to the world tree, Yggdrasil, which holds the Nine Worlds together. Midgard is a world of adventures and challenges, where humans face both natural and supernatural threats. In the heart of Midgard lies the realm of humans, where they live, work, and shape their destinies. This realm is central to the interconnected mythology of the Norse cosmos.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Midgard;
