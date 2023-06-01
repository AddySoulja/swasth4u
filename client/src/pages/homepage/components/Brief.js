import React from "react";
import { styles } from "../styles";
import brief1icon from "../assets/brief1icon.png";
import brief2icon from "../assets/brief2icon.png";
import brief3icon from "../assets/brief3icon.png";

const Brief = () => {
  return (
    <>
      <div style={styles.briefGroup}>
        <div style={styles.brief1}>
          <img alt="icon1" style={styles.brief1icon} src={brief1icon} />
          <div style={styles.brief1text}>Affordable Price</div>
          <div style={styles.brief1info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus nec.
          </div>
        </div>
        <div style={styles.brief2}>
          <img alt="icon2" style={styles.brief2icon} src={brief2icon} />
          <div style={styles.brief2text}>Maximum Discount</div>
          <div style={styles.brief2info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus nec.
          </div>
        </div>
        <div style={styles.brief3}>
          <img alt="icon3" style={styles.brief3icon} src={brief3icon} />
          <div style={styles.brief3text}>Satisfactory Service</div>
          <div style={styles.brief3info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus nec.
          </div>
        </div>
      </div>
      <div style={styles.brief}></div>
    </>
  );
};

export default Brief;
