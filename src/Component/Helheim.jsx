import React, { useState } from "react";

function Helheim() {
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
        <h1>Welcome to Helheim</h1>
        <p>This is the realm of the dead, ruled by the goddess Hel.</p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/HelheimBG.png`}
            alt="Left Image"
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Helheim, a crucial part of Norse mythology, is where the dead find
              their eternal rest. This realm, one of the Nine Worlds, is ruled
              by Hel, a feared goddess. She's quite a unique figure – one side
              of her looks like a living person, and the other half resembles a
              corpse. When you die and head to Helheim, she's the one who
              decides what's next for you. Getting to Helheim isn't easy; you
              must navigate treacherous landscapes harsh weather, and
              potentially encountering hostile supernatural beings like giants
              and other creatures. Norse mythology emphasized that once a person
              started on this journey, there was no turning back, making it a
              critical and often difficult passage to the afterlife. This notion
              of a challenging journey emphasized the significance of death and
              the importance of one's actions in life, as they determined the
              nature of their final destination in the afterlife. Helheim was
              thought to be in the chilly north, beyond the world of the living,
              surrounded by gloomy mountains and toxic rivers. Guarding the
              entrance was Garm, a giant black-furred, red-eyed, huge wolf-like
              creature who only let the already-dead souls through. The realm
              was divided into sections, each with its vibe – one for people who
              died of illness, another for those who met their end from old age,
              and even a place for those who didn't go out with honour or were
              abandoned by the gods. The "Poetic Edda" paints it as a gloomy
              place where souls end up. The "Prose Edda" by Snorri Sturluson
              enters the creation of the Nine Worlds, including Hel and Helheim,
              in a section called Gylfaginning. The "Saga of Hervör and Heidrek"
              is another story source about a warrior, Hervör, who goes on a
              mission to Helheim to grab her forefathers' sword. Helheim is a
              realm with its own rules and order. Norse folks believed the
              afterlife was essential to their cosmic belief system. It's like a
              part of a bigger plan where everyone had their place, be it gods,
              heroes, or regular folks. It's a realm where fear, respect, and
              the acknowledgment of death's inevitability coexist. Helheim
              represents this belief in life continuing in the afterlife, a
              reassuring promise of a place governed by divine laws where the
              spirits of the departed find their eternal home.
            </p>
          )}
        </div>
        <div style={rightImageStyle} onClick={toggleRightImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/beings/Hel.png`}
            alt="Right Image"
            style={imageStyle}
          />
          {rightImageTextVisible && (
            <p>
              Hel holds profound significance as a deity associated with the
              realm of the deceased, known as Helheim. Helheim is a special
              place for individuals who pass away from natural causes or
              illness. This realm is often described as gloomy, cold, misty, and
              dark. It's believed that those who don't meet their end in battle
              or achieve heroism are destined to spend their afterlife in
              Helheim. Hel, the offspring of the cunning god Loki and the
              giantess Angrboða, is a figure with a distinctive appearance. She
              is typically depicted as a being split between life and death,
              with one side appearing normal while the other exhibiting decaying
              corpse features. Hel is often portrayed as a solemn and
              melancholic deity, mirroring the nature of her realm. She is
              characterized as stern and unrelenting but not necessarily
              malevolent. Her primary role is to receive the souls of the
              departed and ensure they find their rightful place in the
              afterlife. One of the most famous stories involving Hel is the
              tale of Baldur's death. Baldur, a beloved god, is killed and sent
              to Hel's realm, prompting an epic quest by the gods to retrieve
              him from Helheim.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Helheim;
