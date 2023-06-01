import React from "react";
import { styles } from "../styles";
import av1 from "../assets/av1.png";
import av2 from "../assets/av2.png";
import av3 from "../assets/av3.png";
import av4 from "../assets/av4.png";
import av5 from "../assets/av5.png";
import av6 from "../assets/av6.png";
import currAv from "../assets/currAv.png";
import star from "../assets/yelloStar.png";

const Testimonials = () => {
  return (
    <>
      <div style={styles.testimonialsLayout}>
        <div style={styles.testimonialsBackground}>
          <div style={styles.testimonialsMain}>
            <div style={styles.testimonialsLeft}>
              <div style={styles.testimonialsLeftText}>
                What
                <span style={styles.testimonialsLeftTextBlue}>
                  {" "}
                  Our Members{" "}
                </span>
                Are Saying About Us
              </div>
              <div style={styles.testimonialsAvatar}>
                <img
                  src={av1}
                  alt="testimonial"
                  style={styles.testimonialsAv1}
                />
                <img
                  src={av2}
                  alt="testimonial"
                  style={styles.testimonialsAv2}
                />
                <img
                  src={av3}
                  alt="testimonial"
                  style={styles.testimonialsAv3}
                />
                <img
                  src={av4}
                  alt="testimonial"
                  style={styles.testimonialsAv4}
                />
                <img
                  src={av5}
                  alt="testimonial"
                  style={styles.testimonialsAv5}
                />
                <img
                  src={av6}
                  alt="testimonial"
                  style={styles.testimonialsAv6}
                />
                <div style={styles.testimonialsAvText}>100+ Reviews</div>
              </div>
            </div>
            <div style={styles.testimonialsRight}>
              <img
                src={currAv}
                alt="member"
                style={styles.testimonialsRightAv}
              />
              <div style={styles.testimonialsRightAvName}>Aman Kumar</div>
              <div style={styles.testimonialsRightAvDate}>12/4/17</div>
              <img
                src={star}
                alt="star"
                style={styles.testimonialsRightStar1}
              />
              <img
                src={star}
                alt="star"
                style={styles.testimonialsRightStar2}
              />
              <img
                src={star}
                alt="star"
                style={styles.testimonialsRightStar3}
              />
              <img
                src={star}
                alt="star"
                style={styles.testimonialsRightStar4}
              />
              <img
                src={star}
                alt="star"
                style={styles.testimonialsRightStar5}
              />
              <div style={styles.testimonialsRightTextLayout}>
                <div style={styles.testimonialsRightTextHeading}>
                  Best Service!!!
                </div>
                <div style={styles.testimonialsRightTextPara}>
                  When I had no any option to dignosist meanwhile Swasth 4U's
                  Health Card came and give a golden opportunity to do so .
                  Thank You Swasth 4U !
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
