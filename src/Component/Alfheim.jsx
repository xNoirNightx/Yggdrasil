import React, { useState } from "react";
import ParticlesBG from "./Particles";

function Alfheim() {
  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh", // Set the minimum height to fill the screen
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
    setRightImageTextVisible(false); // Hide right image text
  };

  const toggleRightImageText = () => {
    setRightImageTextVisible(!rightImageTextVisible);
    setLeftImageTextVisible(false); // Hide left image text
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Welcome to Alfheim</h1>
        <p>
          This is the world of light elves, associated with beauty and light.
        </p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/AlfheimBG.jpg`}
            alt=""
            style={imageStyle}
          />

          {leftImageTextVisible && (
            <p>
              Alfheim is a significant realm and one of the Nine Worlds. It's
              the home of the light elves; Alfheim is often described as a
              celestial place, above the earthly realm but below Asgard, the
              gods' home. According to legend, Freyr, associated with fertility
              and wealth, received Alfheim as a gift from his fellow gods. This
              connected him with the elves, seen as symbols of growth and
              abundance. The light elves who lived in Alfheim were known for
              their extraordinary beauty, wisdom, and magical abilities. They
              were considered benevolent beings and often sought after by humans
              in times of need. Alfheim is a realm of stunning beauty, filled
              with light and serenity, known for its light elves.
            </p>
          )}
        </div>
        <div style={rightImageStyle} onClick={toggleRightImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/beings/lightelfs.png`}
            alt=""
            style={imageStyle}
          />
          {rightImageTextVisible && (
            <p>
              The 'light elves' were celebrated for their otherworldly beauty
              and close connection with light and fertility. This concept of
              light elves is believed to have origins in pre-Christian Germanic
              mythology, which was later incorporated into Norse mythology.
              According to the intricate narrative of Norse mythology, the
              Ljósálfar resided in Alfheim, a celestial realm traditionally
              thought to exist in the heavens or a distant land beyond the realm
              of humans, known as Midgard. The Ljósálfar possessed a remarkable
              shapeshifting talent, allowing them to move seamlessly and
              invisibly between different worlds. They were often associated
              with the healing arts, protective spells, and various magical
              abilities. The Ljósálfar were known for their friendliness towards
              humans, making them familiar with magical rituals for protection
              and assistance. In multiple depictions, they were considered
              trusted allies of the gods, and in specific versions of Norse
              mythology, they were even seen as divine beings in their own
              right.
            </p>
          )}
        </div>
      </div>
      <ParticlesBG />
    </div>
  );
}

export default Alfheim;
