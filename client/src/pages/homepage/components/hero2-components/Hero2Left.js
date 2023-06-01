import React from "react";
import { styles } from "../../styles";
import star from "../../assets/hero2leftstar.png";
import curves from "../../assets/hero2leftcurves.png";
import mainImg from "../../assets/hero2leftImg.png";
import cards from "../../assets/hero2leftcards.png";

const Hero2Left = ({ bottom }) => {
  return (
    <>
      <div
        style={!bottom ? styles.hero2leftlayout : styles.hero2leftlayoutClose}
      >
        <img src={star} alt="star" style={styles.hero2leftStar} />
        <img src={curves} alt="star" style={styles.hero2leftcurves} />
        <img src={mainImg} alt="star" style={styles.hero2leftImg} />
        <img src={cards} alt="star" style={styles.hero2leftcards} />
      </div>
    </>
  );
};

export default Hero2Left;
