import React, { useState } from "react";
import ParticlesBG from './Particles';

function Muspelheim() {
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
        <h1>Welcome to Muspelheim</h1>
        <p>This is the realm of fire and heat, home to fire giants.</p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/MuspelheimBG.png`}
            alt="Left Image"
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Muspelheim, in Norse mythology, is a realm defined by intense fire
              and extreme heat, home to the mighty fire giant, Surt. It embodies
              the essence of fire in its purest, most untamed form – a land of
              unending flames, flowing lava, sparkling embers, and rivers of
              fire cutting through its rugged terrain. This fiery realm is
              encircled by a seemingly impenetrable firewall, guarding it
              against intrusion. Muspelheim's significance predates the creation
              of the Nine Worlds, playing an integral role in the cosmic
              narratives of the universe's origin. Emerging from the primordial
              void, Ginnungagap, Muspelheim and its scorching heat combined with
              Niflheim's icy cold to give birth to life, leading to the creation
              of Ymir, the first being. Muspelheim symbolizes fire's volatile,
              transformative nature, underlining the delicate balance between
              creation and annihilation, a fundamental concept in Norse
              cosmology. This realm serves as a poignant reminder of the eternal
              cycles inherent in Norse mythology, characterized by its
              tumultuous energy and profound significance in the narrative of
              creation and destruction.
            </p>
          )}
        </div>
        <div style={rightImageStyle} onClick={toggleRightImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/beings/Surt.png`}
            alt="Right Image"
            style={imageStyle}
          />
          {rightImageTextVisible && (
            <p>
              Surt, also known as Surtr, is a colossal and mighty being. This
              formidable creature is a member of the fire giants, a race
              associated with chaos and destruction. Surt's dwelling is located
              in the scorching realm of Muspelheim, a world dominated by fire
              and flames, situated far south of the realms inhabited by humans
              and deities. Described vividly in ancient tales, Surt is depicted
              as a gigantic figure brandishing a sword that burns with fire,
              radiating an aura of profound dread that even his fellow giants
              are said to fear. Surt plays a significant role in Norse
              mythology, particularly in the prophesied events of Ragnarok, the
              catastrophic battle that signifies the world's end. According to
              these ancient prophecies, Surt, mounted on his flaming horse, will
              lead an army of giants from Muspelheim to wage war against the
              gods. They will traverse the Bifröst bridge, which connects the
              various realms. During this apocalyptic conflict, Surt is foretold
              to battle with the god Freyr, who has only an antler for defence.
              The prophecy suggests that Surt, wielding his fiery sword, will
              strike down Freyr, marking the god's ultimate demise.
            </p>
          )}
        </div>
      </div>
      <ParticlesBG />
    </div>
  );
}

export default Muspelheim;
