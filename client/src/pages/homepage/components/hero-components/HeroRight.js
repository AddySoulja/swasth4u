import React from "react";
import { styles } from "../../styles";
import heroStars2 from "../../assets/heroStars2.png";
import curvedLines from "../../assets/curvedLine.png.png";
import homeMainImg from "../../assets/heroMainImg.png";
import swasthCard from "../../assets/swasthCard.png";
import cards from "../../assets/cards.png";
import dots2 from "../../assets/dots2.png";

const HeroRight = ({ left }) => {
  return (
    <>
      <div style={!left ? styles.heroRight : styles.heroRightLeft}>
        <img src={heroStars2} alt="stars" style={styles.heroRightStar} />
        <div style={styles.heroMain}>
          <img src={curvedLines} alt="curves" style={styles.heroMain1} />
          <img src={homeMainImg} alt="curves" style={styles.heroMain2} />
          <img src={swasthCard} alt="curves" style={styles.heroMain3} />
          <img src={cards} alt="curves" style={styles.heroMain4} />
        </div>
        <img src={dots2} alt="dots" style={styles.dots2} />
      </div>
    </>
  );
};

export default HeroRight;
