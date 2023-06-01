import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = ["Services", "About us", "Careers"];
  return (
    <>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        {pages.map((item) => (
          <Link
            key={`key@-${item}`}
            to={item.toLowerCase().split(" ")[0]}
            style={{
              textDecoration: "none",
              border: "1px solid black",
              padding: "6px",
              borderRadius: "14px",
            }}
          >
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
