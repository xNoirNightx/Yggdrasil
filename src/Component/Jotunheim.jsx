import React, { useState } from "react";
import ParticlesBG from './Particles';

function Jotunheim() {
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
        <h1>Welcome to Jotunheim</h1>
        <p>This is the realm of giants, often in opposition to the gods.</p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/JotunheimBG.png`}
            alt=""
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Jotunheim, in Norse mythology, stands out as the homeland of the
              mighty giants known as Jotnar. These giants were famous for their
              colossal size, incredible strength, and magical abilities.
              Jotunheim lies east of Midgard, the realm of humans, separated by
              the Ifing River. This realm features towering mountains, vast
              valleys, and dense forests, with a rugged landscape and
              unpredictable weather, including earthquakes, thunderstorms, and
              heavy snowfall. Despite the inherent dangers, Jotunheim attracted
              the Norse gods, who engaged in adventures and epic battles with
              the giants. One famous story revolves around Thor, the god of
              thunder, who often visited Jotunheim to battle giants and recover
              stolen items, like his hammer, Mjolnir. The tale involves Thrym, a
              giant king who took Thor's hammer and demanded the goddess
              Freyja's hand in exchange for its return. Thor, with the help of
              Loki, tricked Thrym to recover his hammer.
            </p>
          )}
        </div>
        <div style={rightImageStyle} onClick={toggleRightImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/beings/giants.png`}
            alt=""
            style={imageStyle}
          />
          {rightImageTextVisible && (
            <p>
              Giants stand out as a realm filled with powerful and enigmatic
              creatures known as Jotnar or Frost Giants. These giants play a
              pivotal role in the intricate narratives of Norse mythology. The
              giants' physical characteristics often set them apart from the
              gods and humans, as they are typically depicted as towering
              figures with robust and muscular frames. Their immense stature
              reflects their power and the primal, untamed forces they
              represent. These giants are not merely one-dimensional adversaries
              but embody a complex interplay of positive and negative roles in
              Norse mythology. One of the most famous giants in Norse mythology
              is Ymir, often regarded as the progenitor of all life. Ymir's
              existence is closely tied to the world's creation, further
              highlighting the giants' connection to the very fabric of the
              cosmos.
            </p>
          )}
        </div>
      </div>
      <ParticlesBG />
    </div>
  );
}

export default Jotunheim;
