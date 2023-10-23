import React, { useState } from "react";
import ParticlesBG from './Particles';

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



  const [leftImageTextVisible, setLeftImageTextVisible] = useState(false);

  const toggleLeftImageText = () => {
    setLeftImageTextVisible(!leftImageTextVisible);
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
            alt=""
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Midgard, a central realm often called "Middle Earth" or "Middle
              Garden," holds a key place among the Nine Worlds. It's where
              humans reside, set between the celestial realms of gods and the
              giants' underground domain. You can picture it as a diverse,
              circular landmass surrounded by the vast "Midgard Sea." What's
              unique about Midgard is the colossal serpent, Jormungandr, coiled
              in the depths of the Midgard Sea. It represents both protection
              and potential danger for humans. Humans are the primary residents
              of Midgard and play a central role in Norse myths. They live their
              lives here, make choices, and shape their destinies. The realm
              serves as a stage for interactions between gods and mortals, where
              deities can influence human lives, offering help or challenges.
              Various texts and sagas like the Prose Edda and the Poetic Edda
              delve into the creation and role of Midgard, along with its
              connections to humanity. They give us insights into how humans
              coexist with gods and mythical beings.
            </p>
          )}
        </div>
      </div>
      <ParticlesBG />
    </div>
  );
}

export default Midgard;
