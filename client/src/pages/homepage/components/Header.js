import React from "react";
import { styles } from "../styles";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mailImage.png";
import calendarIcon from "../assets/calendar.png";
import "./header.css";
const Header = () => {
  return (
    <>
      <div style={styles.header} className="animation">
        <div style={styles.headerContent}>
          <div style={styles.headerLeft}>
            <div style={styles.headerContact}>
              <img src={phoneIcon} alt="phone" width={15} height={15} />
              <div style={styles.headerContactNum}> +91 123 456 7890</div>
            </div>
            <div style={styles.headerLeftDivider}></div>
            <div style={styles.headerEmail}>
              <img src={mailIcon} alt="e-mail" width={19} height={19} />
              <div style={styles.headerEmailAdd}> info@swasth4u.org</div>
            </div>
          </div>
          <div style={styles.headerRight}>
            <div style={styles.headerCalendar}>
              <img src={calendarIcon} alt="calendar" width={19} height={19} />
              <div style={styles.headerCalendarData}>
                Monday - Saturday: 9 am - 11.30 pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
