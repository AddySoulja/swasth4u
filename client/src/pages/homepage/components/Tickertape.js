import React from "react";
import { styles } from "../styles";
import Marquee from "react-fast-marquee";

const Tickertape = () => {
  return (
    <>
      <div style={styles.tickertape}>
        <div style={styles.tickertapeContent}>
          <Marquee
            direction="left"
            speed="72"
            style={{
              width: "1440px",
              height: "auto",
              marginLeft: "-28px",
            }}
            pauseOnHover={true}
          >
            Join Swasth 4U today and unlock a world of discounts on hospitals,
            clinics, diagnostics, pharmacies, homeopathy, and various other
            health-related services. Join Swasth 4U today and unlock a world.
            Join Swasth 4U today and unlock a world of discounts on hospitals,
            clinics, diagnostics, pharmacies, homeopathy, and various other
            health-related services. Join Swasth 4U today and unlock a world
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Tickertape;
