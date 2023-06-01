import wave from "../../assets/wave.png";
import heroStar1 from "../../assets/heroStar1.png";
import heroStar2 from "../../assets/heroStar2.png";
import heroBtnNextIcon from "../../assets/joinNextIcon.png";
import heroLines from "../../assets/heroLines.png";
import { styles } from "../../styles";
import dots1 from "../../assets/dots1.png";
import { Link } from "react-router-dom";
import "../navigation/navigation.css";

const HeroLeft = () => {
  return (
    <>
      {" "}
      <div style={styles.heroLeft}>
        <img src={dots1} alt="dots" style={styles.dots1} />
        <div style={styles.hero1}>
          <img src={wave} alt="Hello there" width={14} height={14} />
          <p style={styles.hero1content}>Hey! We Are Here to Help You!</p>
        </div>

        <div style={styles.hero2}>
          <img src={heroStar1} alt="star" width={10} height={10} />
          <img src={heroStar2} alt="star" width={20} height={20} />
        </div>

        <div style={styles.hero3}>Swasth 4U Health & Wellness Card</div>

        <div style={styles.hero4}>
          Empowering{" "}
          <span style={styles.hero4black}>you to take control of</span> your
          health
          <img src={heroLines} alt="hero lines" style={styles.heroLines} />
        </div>

        <div style={styles.hero5}>
          Join Swasth 4U today and unlock a world of discounts on hospitals,
          clinics, diagnostics, pharmacies, homeopathy, and various other
          health-related services.
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
          <div style={styles.heroBtn}>
            <div style={styles.heroBtnContent}>Join Now</div>
            <img src={heroBtnNextIcon} alt="click to join now" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeroLeft;
