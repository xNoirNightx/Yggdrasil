import React, { useState } from "react";

function Vanaheim() {
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

  const smallerImageStyle = {
    width: "30%",
    margin: "10px",
    cursor: "pointer",
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
    display: "flex",
    flexDirection: "column",
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
    setImage1TextVisible(false);
    setImage3TextVisible(false);
  };

  const toggleImage3Text = () => {
    setImage3TextVisible(!image3TextVisible);
    setImage1TextVisible(false);
    setImage2TextVisible(false);
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>Welcome to Vanaheim</h1>
        <p>This is the realm of the Vanir, another group of deities.</p>
      </div>

      <div style={imagesContainerStyle}>
        <div style={leftImageStyle} onClick={toggleLeftImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/realms/VanaheimBG.png`}
            alt="Left Image"
            style={imageStyle}
          />
          {leftImageTextVisible && (
            <p>
              Vanaheim is renowned as the realm of the Vanir, a group of deities
              associated with fertility, nature, and prosperity themes. This
              realm is typically envisioned as a lush and vibrant land
              characterized by its natural abundance and captivating beauty.
              Vanaheim serves as a sanctuary for divine beings linked to various
              aspects of life, including agriculture, wealth, affection, and
              maritime matters. It is often portrayed as a realm of harmony
              where the Vanir deities ensure the land's fertility and the
              prosperity of its inhabitants. While Vanaheim may not occupy the
              same level of prominence as Asgard in mythological narratives, it
              holds significant importance in the tales of the gods' origins. A
              noteworthy episode in its history is the conflict between the
              Vanir and the Aesir, the primary tribe of Norse gods. This war led
              to tension, followed by a truce, an exchange of hostages, and the
              subsequent merging of their divine pantheons. Despite being less
              prevalent in ancient texts and sagas than in realms like Asgard,
              Vanaheim is referenced in various sources that provide insights
              into the nature of this realm and the deities who inhabit it. The
              realm's significance is underscored by its portrayal as a
              harmonious domain where the Vanir deities exert their influence
              over the land's fertility and the well-being of its inhabitants.
              Vanaheim's essence starkly contrasts Asgard's celestial and
              warrior-focused disposition, emphasizing the gods' deep connection
              with the natural world. The conflict with the Aesir, the
              subsequent peace agreement, and the merging of their divine
              pantheons emphasize the crucial role of the Vanir within the Norse
              mythological framework. Vanaheim's portrayal as a realm of
              abundance and prosperity also highlights the significant influence
              of the Vanir gods in matters related to fertility and wealth,
              enriching the complexity of Norse mythology. Ultimately, the
              understated yet vital nature of Vanaheim, coupled with the
              intriguing character of the Vanir, adds depth and allure to the
              Norse cosmological landscape.
            </p>
          )}
        </div>
        <div style={rightImageStyle} onClick={toggleRightImageText}>
          <img
            src={`${process.env.PUBLIC_URL}/beings/Freyja.png`}
            alt="Image 1"
            style={smallerImageStyle}
            onClick={toggleImage1Text}
          />
          {image1TextVisible && (
            <p>
              Freyja, a goddess of immense beauty, power, and versatility, is
              central to the Vanir, a primary group of deities. She embodies
              love, aesthetic charm, fertility, and mystical abilities. Freyja's
              image as a captivating and irresistible goddess is a frequent
              theme in Norse stories. As a fertility goddess, she governs human
              procreation and agricultural abundance. She embodies love, desire,
              and sensuality, often summoned in romance and passionate love.
              Freyja is known for possessing the magical necklace Brísingamen,
              believed to enhance her beauty and influence. She also shares
              dominion over the fallen in battle, with half of the warriors
              claimed for her realm, Folkvangr, while the other half goes to
              Valhalla under Odin's rule. This dual role reflects the
              multifaceted nature of Norse deities, representing both
              life-giving and protective aspects. Freyja's talents extend to
              magical abilities, particularly in seidr, a unique form of Norse
              sorcery connected to prophecy and transformation. She is regarded
              as a master of this mystical craft, even teaching it to other
              deities, including Odin. Freyja's influence also extends to
              matters of wealth and prosperity. Her association with gold and
              precious objects highlights her role as a goddess of abundance.
              Freyja's striking appeal and captivating charm earn admiration
              from both divine and mortal beings. Freyja's influence isn't
              confined to the physical realm, as she possesses significant
              magical abilities, particularly the mystical art of seidr, which
              she is credited with teaching other gods, including Odin. Through
              Freyja, we gain insight into the complex nature of the divine
              feminine in Norse mythology, where contrasting qualities like
              gentleness and power, love and war, and nurturing and leadership
              coexist. Her enduring appeal and multifaceted attributes continue
              to captivate and inspire, shedding light on the significant role
              of female deities in Norse myth.
            </p>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/beings/Freyr.png`}
            alt="Image 2"
            style={smallerImageStyle}
            onClick={toggleImage2Text}
          />
          {image2TextVisible && (
            <p>
              Freyr is known for his association with fertility, wealth, and
              nature's blessings. He belongs to the Vanir gods, a group closely
              tied to abundance and prosperity. The Vanir were once in conflict
              with the Aesir gods before forming an alliance, and Freyr is the
              son of the sea god Njord, sharing a twin bond with Freyja, the
              goddess of love and allure. Freyr is often depicted as a handsome
              and gentle deity, representing our world's nurturing and
              life-giving aspects. He symbolizes fertility, overseeing
              agriculture, cultivation, and crop growth. His role is closely
              connected to the harvest season and the changing seasons, with
              people venerating him for rich yields and secure livelihoods. One
              notable story about Freyr involves obtaining the magical ship
              Skíðblaðnir from the dwarves. This ship has a unique ability to
              travel on land and sea, symbolizing Freyr's prosperity and ability
              to bring abundance wherever he goes. Freyr's mythology also
              includes themes of love and fertility, as he is considered a god
              of romantic love, marriage, and sensuality. Freyr's friendliness
              is contrasted by his role in the events leading up to Ragnarok,
              the apocalyptic battle in Norse mythology. Prophecies indicate
              that Freyr will engage in mortal combat with the fire giant Surt
              during this cataclysmic event, leading to his eventual demise.
              Freyr is a central deity in Norse mythology, representing
              fertility, wealth, and leadership. His name reflects his role as a
              ruler and benefactor, symbolizing his authority and generosity. He
              is associated with agricultural prosperity and is seen as a
              nurturing god who ensures the Earth's bounty. His blessings extend
              to happiness, peace, and contentment, highlighting his importance
              in the Norse worldview, where nature's forces and divine
              intervention are intricately interconnected. Freyr's character
              provides insight into the Norse people's reverence for nature's
              vital provisions and harmonious relationship with the natural
              world.
            </p>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/beings/Njord.png`}
            alt="Image 3"
            style={smallerImageStyle}
            onClick={toggleImage3Text}
          />
          {image3TextVisible && (
            <p>
              Njord is celebrated for his connections to the sea, maritime
              activities, and wealth. He belongs to the Vanir deities, a group
              in Norse mythology closely associated with natural elements and
              abundance. Njord's domain includes the sea, wind, and prosperity,
              making him a crucial deity for sailors, fishermen, and traders. He
              is described as a master mariner who can calm storms and ensure
              safe voyages for those who invoke his name. Njord's influence
              extends to wealth, representing the treasures provided by the sea,
              and he also has the power to bestow fertility upon the land,
              ensuring bountiful harvests. Therefore, Njord is both a god of the
              sea and a deity of wealth, earning the deep respect of mariners
              and traders who sought his blessings for successful journeys and
              prosperity in their endeavors. His connection to fertility also
              made him the protector of agricultural abundance and productive
              harvests. Njord's presence in Norse mythology highlights the
              crucial role of the sea and nature in the lives of the Norse
              people, underscoring their dependence on these elements for their
              survival and prosperity. One notable story involving Njord
              revolves around his marriage to Skadi, a giantess known for her
              hunting skills. The union between the sea god and the
              mountain-dwelling Skadi was arranged to promote peace between the
              divine beings and giants. However, they encountered difficulties
              due to their differing backgrounds and preferences. Their attempt
              to divide their time between the mountains and the coast failed to
              bring them happiness. Eventually, they decided to separate but did
              so amicably, without animosity. Njord and Skadi continued to
              respect each other's choices, maintaining a cordial relationship
              despite parting ways. Njord is a prominent deity in Norse
              mythology, associated with the sea, wealth, and fertility. His
              name reflects themes of wealth and generosity. As a Vanir god, he
              embodies the Norse emphasis on nature, commerce, and prosperity.
              Njord was highly regarded by sailors and fishermen, and his
              influence extended to wealth and fertility. His story with Skadi
              teaches the value of mutual respect and understanding, even in the
              face of differences. Njord represents more than just a sea god; he
              symbolizes wealth, fertility, compromise, and mutual respect in
              Norse mythology.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Vanaheim;
