import React, { useState } from "react";
import ParticlesBG from './Particles';

function WorldTree() {
  const containerStyle = {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const headerStyle = {
    marginBottom: "20px",
  };

  const imageStyle = {
    width: "50%",
  };

  const smallerImageStyle = {
    width: "30%",
    margin: "10px",
    cursor: "pointer",
  };

  const leftImageStyle = {
    flex: 1,
    cursor: "pointer",
  };

  const rightImageStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const [leftImageTextVisible, setLeftImageTextVisible] = useState(false);
  const [rightImageTextVisible, setRightImageTextVisible] = useState(false);

  const [image1TextVisible, setImage1TextVisible] = useState(false);
  const [image2TextVisible, setImage2TextVisible] = useState(false);

  const toggleLeftImageText = () => {
    setLeftImageTextVisible(!leftImageTextVisible);
    setRightImageTextVisible(false);
  };

  const toggleRightImageText = () => {
    setRightImageTextVisible(!rightImageTextVisible);
    setLeftImageTextVisible(false);
  };

  const toggleImage1Text = () => {
    setImage1TextVisible(!image1TextVisible);
    setImage2TextVisible(false);
  };

  const toggleImage2Text = () => {
    setImage2TextVisible(!image2TextVisible);
    setImage1TextVisible(false);
  };

  const imagesContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Welcome to the World Tree</h1>
        <p>
          This is the mythical tree that connects the nine realms of Norse
          mythology.
        </p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/WorldTreeBG.png`}
            alt=""
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Yggdrasil, a symbol of immense importance, is often called the
              World Tree. It is a majestic and mysterious construct. It is often
              depicted as a colossal ash tree that serves as the cosmic axis,
              connecting the nine realms of Norse cosmology in a complex
              network. Yggdrasil is considered the foundational element of
              existence in Norse cosmology. Its three roots stretch towards the
              three wells of fate, and its vast branches reach across the
              heavens, providing a home to various creatures like birds,
              squirrels, and dragons. Yggdrasil is not just a static structure;
              it's a living world inhabited by diverse beings, including an
              eagle perched on its branches and the dragon Nidhogg constantly
              chewing at its roots. Beyond its mythological importance,
              Yggdrasil has been interpreted in various ways, representing the
              human mind or the interconnectedness of all entities. Yggdrasil is
              a central element in Norse mythology, symbolizing the
              interconnected nature of existence and the ongoing cycle of life,
              death, and rebirth. Its multifaceted symbolism has inspired deep
              analysis from scholars, enthusiasts, and spiritual practitioners.
              Regardless of the diverse interpretations, Yggdrasil remains a
              powerful and profound symbol within the Norse mythological
              tradition, offering insight into ancient Scandinavia's spiritual
              beliefs and cultural paradigms. The tree illustrates the
              interconnected and cyclical nature of the world, a universal
              concept that transcends cultures and time. Yggdrasil's enduring
              presence underscores the continuity of these ancient insights into
              the interconnectedness of life and the universe, reminding us of
              our place within this vast cosmic network.
            </p>
          )}
        </div>
        <div style={rightImageStyle} onClick={toggleRightImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/beings/Nidhogg.png`}
            alt=""
            style={smallerImageStyle}
            onClick={toggleImage1Text}
          />
          {image1TextVisible && (
            <p>
              Nidhogg is a menacing dragon or serpent residing at the roots of
              Yggdrasil, the cosmic world tree. It symbolizes death, decay, and
              destruction, reflecting some of the harsher realities of
              existence. Nidhogg gnaws at the roots of Yggdrasil, inducing decay
              and withering, symbolizing the relentless destructive forces
              ceaselessly operating in the world. Yet, in specific contexts, it
              is perceived as a critical component of the natural cycle of
              existence, embodying the inescapable phenomena of life and death.
              Nidhogg plays a pivotal role in the cataclysmic event of Ragnarok,
              the prophesied end of the world. Its story incites a profound
              reflection on the dual nature of existence and the incessant dance
              between creation and destruction, life and death.
            </p>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/beings/Ratatoskr.png`}
            alt=""
            style={smallerImageStyle}
            onClick={toggleImage2Text}
          />
          {image2TextVisible && (
            <p>
              Ratatoskr, the squirrel of Norse mythology, acts as a messenger
              between the eagle and the serpent on Yggdrasil, the immense world
              tree. His symbolic significance is multifaceted, sparking debates
              and various interpretations. He represents the fundamental role of
              communication and information exchange and the cosmic axis linking
              the three realms of Norse cosmology. Despite his seemingly minor
              role, Ratatoskr highlights the importance of communication across
              different realms and instills a deeper appreciation for the value
              of every element within the natural world and its contributions to
              the functioning of the cosmos.
            </p>
          )}
        </div>
      </div>
      <ParticlesBG />
    </div>
  );
}

export default WorldTree;
