import React from "react";
import { styles } from "../../styles";
import checkIcon from "../../assets/checkIcon.png";
import joinNextIcon from "../../assets/joinNextIcon.png";
import { Link } from "react-router-dom";

const Hero2right = () => {
  return (
    <>
      <div style={styles.hero2rightlayout}>
        <div style={styles.hero2rightheading}>
          <span style={styles.hero2rightheadingblack}>
            Unlock Discounts for
          </span>
          <br />
          Better Healthcare
        </div>
        <div style={styles.hero2rightpara}>
          Our platform offers exclusive discounts on a wide range of healthcare
          services, allowing you to prioritize your well-being without breaking
          the bank.
        </div>
        <div style={styles.hero2rightpoints}>
          <img src={checkIcon} alt="check" style={styles.hero2rightpt1} />
          <div style={styles.hero2rightpt1text}>Discount on all services</div>
          <img src={checkIcon} alt="check" style={styles.hero2rightpt2} />
          <div style={styles.hero2rightpt2text}>Easy Online Appointments</div>
          <img src={checkIcon} alt="check" style={styles.hero2rightpt3} />
          <div style={styles.hero2rightpt3text}>Budget-Friendly Options</div>
          <img src={checkIcon} alt="check" style={styles.hero2rightpt4} />
          <div style={styles.hero2rightpt4text}>Protect your Family </div>
        </div>

        <Link
          to="/api/users"
          style={{
            position: "relative",
            zIndex: "50",
            paddingTop: "0px",
          }}
          className="navConnBtn"
        >
          <div style={styles.hero2btn}>
            <div style={styles.hero2btntext}>Join Now</div>
            <img src={joinNextIcon} alt="click to join now" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Hero2right;
