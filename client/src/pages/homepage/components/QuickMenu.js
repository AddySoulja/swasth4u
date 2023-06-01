import React from "react";
import { styles } from "../styles";
import qm1 from "../assets/qm1.png";
import qm2 from "../assets/qm2.png";
import qm3 from "../assets/qm3.png";
import qm4 from "../assets/qm4.png";
import qm5 from "../assets/qm5.png";
import qm6 from "../assets/qm6.png";
import qm7 from "../assets/qm7.png";
import qm8 from "../assets/qm8.png";

const QuickMenu = () => {
  return (
    <>
      <div style={styles.thumb1}>
        <div style={styles.thumb1back}>
          <img src={qm1} alt="Doctors & Hospital" />
          <div style={styles.thumb1text}>Doctors & Hospital</div>
        </div>
      </div>
      <div style={styles.thumb2}>
        <div style={styles.thumb2back}>
          <img src={qm2} alt="Doctors & Hospital" />
          <div style={styles.thumb2text}>Pharmacy</div>
        </div>
      </div>
      <div style={styles.thumb3}>
        <div style={styles.thumb3back}>
          <img src={qm3} alt="Doctors & Hospital" />
          <div style={styles.thumb3text}>Physiotherapy</div>
        </div>
      </div>
      <div style={styles.thumb4}>
        <div style={styles.thumb4back}>
          <img src={qm4} alt="Doctors & Hospital" />
          <div style={styles.thumb4text}>Ambulance</div>
        </div>
      </div>
      <div style={styles.thumb5}>
        <div style={styles.thumb5back}>
          <img src={qm5} alt="Doctors & Hospital" />
          <div style={styles.thumb5text}>
            Pathology Labs& Diagnostic Centres
          </div>
        </div>
      </div>
      <div style={styles.thumb6}>
        <div style={styles.thumb6back}>
          <img src={qm6} alt="Doctors & Hospital" />
          <div style={styles.thumb6text}>Health & Wellness Care</div>
        </div>
      </div>
      <div style={styles.thumb7}>
        <div style={styles.thumb7back}>
          <img src={qm7} alt="Doctors & Hospital" />
          <div style={styles.thumb7text}>Ayurvedic & Homeopathy Clinic</div>
        </div>
      </div>
      <div style={styles.thumb8}>
        <div style={styles.thumb8back}>
          <img src={qm8} alt="Doctors & Hospital" />
          <div style={styles.thumb8text}>Healthcare Instruments</div>
        </div>
      </div>
    </>
  );
};

export default QuickMenu;
