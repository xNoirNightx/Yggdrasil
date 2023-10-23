import React, { useState } from "react";
import ParticlesBG from './Particles';

function Nidavellir() {
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
        <h1>Welcome to Nidavellir</h1>
        <p>This is the realm of dark elves or dwarves, skilled craftsmen.</p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/NidavellirBG.png`}
            alt=""
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Nidavellir, also recognized as Svartalfheim in Norse mythology,
              holds a distinct and enigmatic status as the underground realm of
              the Dwarves or Dark Elves. The realm conjures an image of an
              intricate underground domain concealed from the vivacity of the
              surface world. Nidavellir is imbued with an aura of mystery,
              characterized by its twisted tunnels, expansive covert landscapes,
              and rich veins of precious ores. Within these concealed recesses,
              the Dwarves exercise their legendary craftsmanship, earning a
              reputation as unparalleled craftspeople, blacksmiths, and
              jewellers. These Dwarves are renowned for their ability to fashion
              potent weaponry, detailed ornaments, and many invaluable
              artifacts. Notable for their reclusive tendencies, they remain
              secluded in their subterranean abodes, cherishing their solitary
              existence. Nidavellir's unique standing, mainly its association
              with masterful craftsmanship and the reclusive Dwarves,
              contributes to the overall richness of Norse mythology. It
              underscores the essential role of craftsmanship in this
              mythological universe, even if its narratives are comparatively
              understated. Nidavellir, the underground world where Dwarves hone
              their craft in solitude, is symbolic of the vital role of
              craftsmanship in shaping countless mythological narratives and
              quests. The Dwarves, though often operating from the shadows,
              personify the Norse value of mastering a craft, and their less
              visible but profound roles bring a layered complexity to the
              myths. In this manner, the mysteries of Nidavellir underscore that
              even the most concealed and enigmatic corners of the mythological
              world bear the utmost significance in the grand design of Norse
              mythology.
            </p>
          )}
        </div>
        <div style={rightImageStyle} onClick={toggleRightImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/beings/Dwarves.png`}
            alt=""
            style={imageStyle}
          />
          {rightImageTextVisible && (
            <p>
              Dwarves were envisioned as tiny humanoid beings known for their
              exceptional skills in artisanal crafts, particularly in
              metalworking and the creation of enchanted objects. These dwarves
              were often depicted as clever and astute individuals, highly
              regarded for their unparalleled expertise in working with metals,
              a talent highly esteemed by the gods. They were credited with
              crafting numerous magical items, including Thor's mighty hammer,
              Mjölnir, Sif's gleaming golden hair, and Odin's formidable spear,
              Gungnir. Dwarves emerged from the maggots that infested the
              colossal body of the giant Ymir after his demise at the hands of
              Odin and his brothers. The gods bestowed life and intellect upon
              these maggots, transforming them into dwarves. In some
              interpretations, the god Mimir, renowned for his wisdom, created
              the dwarves as skilled artisans to assist him. Dwarves held a deep
              connection with mountainous landscapes and stones in Norse
              mythology. They were believed to reside in subterranean caves and
              mines within mountains, tirelessly mining precious metals and
              stones for their intricate craftsmanship. This bond with cliffs
              and rocks made dwarves robust and resilient, enabling them to
              endure the harsh conditions of their underground homes and the
              physical demands of their labour. Moreover, dwarves were thought
              to possess remarkable strength and stamina, allowing them to
              manipulate large rocks effortlessly. In certain myths, dwarves
              were said to be made of stone or had the magical ability to
              transform into rocks or gravel, which helped them avoid capturing
              or safeguarding their treasures. Dwarves underscore the profound
              respect for craftsmanship and artisanal skills in Norse culture.
              Dwarves were portrayed as master artisans capable of creating
              items of exceptional beauty, durability, and mystical power. Their
              reputation as amazing craftsmen and enchanters made them highly
              sought after by gods and legendary heroes in Norse mythology to
              fashion extraordinary tools, weapons, and artifacts of incredible
              potential.
            </p>
          )}
        </div>
      </div>
      <ParticlesBG />
    </div>
  );
}

export default Nidavellir;
