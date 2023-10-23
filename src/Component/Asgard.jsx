import React, { useState } from 'react';

function Asgard() {
  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '50%',
  };

  const smallerImageStyle = {
    width: '30%',
    margin: '10px',
    cursor: 'pointer',
  };

  const leftImageStyle = {
    flex: 1,
    cursor: 'pointer',
  };

  const rightImageStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const [leftImageTextVisible, setLeftImageTextVisible] = useState(false);
  const [rightImageTextVisible, setRightImageTextVisible] = useState(false);

  const [image1TextVisible, setImage1TextVisible] = useState(false);
  const [image2TextVisible, setImage2TextVisible] = useState(false);
  const [image3TextVisible, setImage3TextVisible] = useState(false);

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
    setImage3TextVisible(false);
  };

  const toggleImage2Text = () => {
    setImage2TextVisible(!image2TextVisible);
    setImage1TextVisible (false);
    setImage3TextVisible(false);
  };

  const toggleImage3Text = () => {
    setImage3TextVisible(!image3TextVisible);
    setImage1TextVisible(false);
    setImage2TextVisible(false);
  };

  const imagesContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Welcome to Asgard</h1>
        <p>This is the realm of the Aesir and powerful gods.</p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/AsgardBG.png`}
            alt="Left Image"
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Asgard, the celestial realm of Norse mythology, is the splendid
              home of the Aesir, a primary group of divine beings. This
              magnificent city stands high in the heavens, accessible only
              through the ethereal Bifrost, a rainbow bridge. The city's
              grandeur is protected by a mighty wall, a creation attributed to
              Odin and his brothers, Vili and Ve. Asgard features numerous
              significant halls, including Valhalla, where brave warriors find
              their place in Odin's Hall of the Fallen. Vingolf is the majestic
              hall of the goddesses, while Alfheim belongs to Freyr, the god of
              abundance. In addition to these halls, Asgard houses landmarks
              like Mimir's Well, a source of wisdom guarded by the wise giant
              Mimir, and Heimdall's golden hall, the sentinel of the Bifrost
              bridge. Asgard is home to prominent gods and goddesses, such as
              Thor, Loki, Baldur, and Tyr, who play pivotal roles in shaping the
              destinies of both the divine and mortal worlds. This celestial
              realm is a place of splendour and a stage for conflicts and drama.
              Gods and goddesses face personal challenges and engage in epic
              battles against giants, monsters, and formidable adversaries.
              Asgard is the central and splendid realm within the Norse cosmos,
              home to the Aesir gods. Linked to the realm of humans through the
              Bifrost bridge, Asgard is the backdrop for countless mythological
              tales found in revered literature. These tales reveal the lives,
              exploits, and relationships of the gods and goddesses, reflecting
              the core tenets of Norse mythology. As a symbol of divine power
              and order, Asgard showcases celestial grandeur amidst cosmic
              turbulence. Like Valhalla and Gladsheim, its halls exemplify Norse
              ideals of bravery, glory, wisdom, and leadership. The stories of
              Asgard continue to inspire and captivate, preserving the rich
              cultural heritage of the Norse people.
            </p>
          )}
        </div>
        <div style={rightImageStyle} onClick={toggleRightImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/beings/Odin.png`}
            alt="Image 1"
            style={smallerImageStyle}
            onClick={toggleImage1Text}
          />
          {image1TextVisible && (
            <p>
              Odin plays a crucial role in Norse mythology, commanding the
              hierarchy of Norse deities. As the supreme god, Odin rules over
              Asgard, the divine realm of the gods. He is often described as a
              figure of profound wisdom and formidable power, associated with
              domains that include knowledge, warfare, poetry, and sorcery. Odin
              is known by many titles, with "Allfather" being one of the most
              prominent, as he is considered the father of the gods in Norse
              mythology. A defining trait of Odin is his unrelenting search for
              knowledge and wisdom. A remarkable example of this pursuit is the
              self-sacrifice of his right eye to drink from the Well of Wisdom,
              granting him phenomenal knowledge and profound insight. Odin's
              thirst for knowledge also extends to studying runes, mysterious
              symbols representing power and communication. He unlocked their
              secrets through a self-imposed trial of hanging himself from the
              World Tree, Yggdrasil. Odin assumes the role of a war god, often
              portrayed as a fierce and strategic leader of the divine forces in
              battle. He embodies qualities such as bravery, cunning, and
              tactical warfare. Odin is served by the Valkyries, a group of
              female warriors who act as his warriors who choose fallen soldiers
              from past wars to be escorted to Valhalla, the grand hall where
              the honoured killed are housed.
            </p>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/beings/Thor.png`}
            alt="Image 2"
            style={smallerImageStyle}
            onClick={toggleImage2Text}
          />
          {image2TextVisible && (
            <p>
              Thor, a central and widely recognized God in Norse mythology, is
              recognized as one of the most prominent deities within the
              pantheon. Born of the union between Odin and Fjörgyn, Thor is
              frequently depicted as a challenging and mighty warrior. His
              dominion contains thunder, lightning, sheer physical strength, and
              the guardianship of divine realms and humanity. At the heart of
              Thor's persona is his iconic weapon, Mjolnir, a hammer only usable
              to those worthy; it grants him control over the weather and the
              ability to deliver devastating blows to his enemies. As a guardian
              of Asgard, the divine realm, and Midgard, the human world, Thor
              represents bravery, valour, and unwavering loyalty. He is often
              portrayed as an approachable and amiable deity, ever prepared to
              engage in conflicts to protect divine beings and mortals from
              various threats, particularly those posed by giants. Among Thor's
              legendary exploits, his battles against the giants perennial
              threats to gods and mankind, are mainly celebrated. His strength,
              allowing him to lift unimaginably heavy objects and confront
              daunting attackers, is a source of great reverence. His adventures
              are marked by challenges that he overcomes through a combination
              of extraordinary physical power, strategic insight, and the
              assistance of Mjolnir. Thor's vivacious and impulsive nature is
              balanced by his bravery and devotion to justice, making him an
              endearing and revered figure in Norse mythology. As the protector
              of both gods and mortals, Thor represents strength, guardianship,
              and the ultimate triumph of good over evil. His enduring
              popularity and importance in Norse mythology firmly establish him
              as one of the pantheon's most iconic and influential figures.
              Thor's stories, filled with epic battles, magical weaponry, and
              divine justice, continue to inspire works of literature, art, and
              modern pop culture. As the god of thunder and the defender of
              realms, Thor's character resonates with timeless ideals of
              courage, loyalty, and the unwavering pursuit of righteousness,
              leaving a lasting impact on audiences worldwide.
            </p>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/beings/Loki.png`}
            alt="Image 3"
            style={smallerImageStyle}
            onClick={toggleImage3Text}
          />
          {image3TextVisible && (
            <p>
              Loki, a complicated character in Norse mythology, is one of the
              most well-known gods in the pantheon. He's famous for being a
              shape-shifter and a master trickster. Loki is part of the Aesir,
              the leading group of gods in Norse mythology. He's known for being
              clever, mischievous, and unpredictable, and his actions can lead
              to good and bad outcomes for the gods and the broader world of
              Norse mythology. Even though Loki wasn't born among the Aesir, he
              has a strong connection with them. He's considered a blood-brother
              to Odin, the All-Father of the gods. Loki is often portrayed as a
              provocative and sly figure. He's brilliant and can shapeshift into
              anything he wants. His pranks and tricks often target the gods,
              challenging their plans and causing uproars. But it's worth
              mentioning that Loki isn't just a troublemaker; sometimes, he
              helps the gods. He assists them in retrieving essential items,
              finding innovative solutions to problems, and interacting with
              other mythical beings. However, Loki's actions can lead to severe
              consequences, and his tricks can sometimes cause trouble,
              conflict, and even disasters. One of the most famous stories
              involving Loki is the death of Baldur, Odin and Frigg's beloved
              son. Baldur had ominous dreams about his death, so Frigg made all
              things promise not to harm him—except for mistletoe, which she
              overlooked. Loki took advantage of this and made a weapon from
              mistletoe. He tricked the blind god Hod into throwing it at Baldur
              during a game, which led to Baldur's death and caused immense
              sorrow among the gods and other beings.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Asgard;
