import React, { useState } from "react";
import ParticlesBG from './Particles';

function Niflheim() {
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
        <h1>Welcome to Niflheim</h1>
        <p>This is the realm of ice and cold, associated with mist and fog.</p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/NiflheimBG.png`}
            alt="Left Image"
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Niflheim is often envisioned as a realm covered in an intense,
              bone-chilling cold. Niflheim is integral to various mythological
              events and figures. It is associated with the origin of frost
              giants and the primordial cow, Audhumla, who nourished Ymir. The
              rivers flowing through Niflheim, like Elivágar, are believed to
              have shaped other realms within the Norse cosmos. Niflheim's
              significance is further highlighted in the prophecy of Ragnarok,
              where the frost giants, aided by their allies, are foretold to
              emerge from the icy depths of Niflheim to engage in a climactic
              battle against the gods, marking a final clash between the
              opposing forces of ice and fire. Niflheim's place in Norse
              mythology is as vital as any other realm. Its icy and mysterious
              nature, situated at the polar opposite of Muspelheim, the realm of
              fire, creates a profound contrast in the cosmic structure.
              Niflheim's association with Ymir and its role in the universe's
              creation underscores its fundamental significance. The primordial
              cow, Audhumla, is emblematic of the intricate interplay between
              Niflheim and the emergence of life. Even though Niflheim may not
              always be at the forefront of mythological tales, it takes center
              stage in the cataclysmic events of Ragnarok, as the frost giants,
              originating from this realm, lead the final battle against the
              gods, marking the conclusion of the present age.
            </p>
          )}
        </div>
        <div style={rightImageStyle} onClick={toggleRightImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/beings/ymir.png`}
            alt="Right Image"
            style={imageStyle}
          />
          {rightImageTextVisible && (
            <p>
              Ymir is pivotal in Norse mythology as the progenitor of the giant
              race. In the primordial days, when the world was still in its
              infancy, two contrasting realms coexisted: Niflheim, a realm of
              bitter cold and pervasive mist, and Muspelheim, a realm
              characterized by scorching heat. These opposing forces,
              represented by the icy rivers of Niflheim and the fiery rivers of
              Muspelheim, converged in the boundless void of Ginnungagap. From
              the melting frost of Niflheim, Ymir emerged as a unique being,
              having both male and female traits. He lived on the cosmic cow
              Audumla's milk. As Audumla licked the salty ice, she revealed
              Buri, the primal god. Buri fathered Bor, who had three sons: Odin,
              Vili, and Ve. Ymir grew to colossal proportions, and while he
              slept, his sweat gave rise to the first male and female giants.
              Another pair of giants were born from the caverns of his armpits,
              leading to the proliferation of these unruly beings. In response
              to the chaos caused by the giants, Odin, Vili, and Ve, known as
              the sons of Bor and Bestla, decided to restore order. To end
              Ymir's despotic rule and unlock the potential for creation, Odin,
              the wisest of the gods and revered as the Allfather, resolved to
              eliminate Ymir. With their combined might, the three sons of Bor
              launched a brutal attack on Ymir. As the giant succumbed to their
              power, his blood surged, causing a catastrophic flood that wiped
              out all but two giants. Bergelmir and his spouse survived on a
              piece of driftwood and began a new giant lineage. Odin, Vili, and
              Ve used Ymir's colossal body to shape the world as we know it: his
              flesh became the Earth, his blood transformed into the vast
              oceans, his bones became majestic mountains, and his skull formed
              the sky. They fashioned his eyebrows into a protective barrier for
              the gods, creating Midgard, the realm of humans. The fiery sparks
              from Muspelheim became the stars, and his brains were repurposed
              as clouds. Ymir's death marked the establishment of a new order,
              with the gods overseeing the cosmos and giants confined to their
              realms.
            </p>
          )}
        </div>
      </div>
      <ParticlesBG />
    </div>
  );
}

export default Niflheim;
