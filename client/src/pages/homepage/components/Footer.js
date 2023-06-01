import React from "react";
import { styles } from "../styles";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import twit from "../assets/twit.png";
import footLogo from "../assets/footerLogo.png";

const Footer = ({ layout }) => {
  return (
    <>
      <div
        style={
          layout === "signup"
            ? styles.footerSignup
            : layout === "login"
            ? styles.footerLogin
            : styles.footer
        }
      >
        <div style={styles.footer1}>
          <img src={footLogo} alt="swasth4u logo" style={styles.footer1logo} />
          <div style={styles.footer1text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet,
          </div>
          <div style={styles.footer1social}>
            <img src={fb} alt="facebook" />
            <img src={ig} alt="Instagram" />
            <img src={twit} alt="twitter" />
          </div>
        </div>

        <div style={styles.footer2}>
          <div style={styles.footer2head}>Helpful Link</div>
          <div style={styles.footer2divider}></div>
          <div style={styles.footer2a}>Gallery</div>
          <div style={styles.footer2b}>About Us</div>
          <div style={styles.footer2c}>Privacy Policy</div>
          <div style={styles.footer2d}>Terms & Conditions</div>
        </div>

        <div style={styles.footer3}>
          <div style={styles.footer2head}>Join Us</div>
          <div style={styles.footer2divider}></div>
          <div style={styles.footer3a}>Partner Location</div>
          <div style={styles.footer3b}>Become an Associates</div>
          <div style={styles.footer3c}>Become a Fitting Partner</div>
          <div style={styles.footer3d}>Join To recieve Discounts</div>
        </div>

        <div style={styles.footer4}>
          <div style={styles.footer2head}>Contact Us</div>
          <div style={styles.footer2divider}></div>
          <div style={styles.footer4heading}>
            HEAD OFFICE 1st Floor,Narayani Complex,Shivnagar, Bairiya Road,
            Zeromile,Muzaffarpur, Bihar- 842001
          </div>
          <div style={styles.footer4inputlayout}>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              style={styles.footer4input}
            />
            <div style={styles.footer4inputbtn}>
              <div style={styles.footer4inputbtntext}>Sign Up</div>
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <div style={styles.footerBottomLine}></div>
          <div style={styles.footerBottomLeft}>
            All rights reserved © 2023 • swasth4u
          </div>
          <div style={styles.footerBottomRight}>info@swasth4u.org</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
