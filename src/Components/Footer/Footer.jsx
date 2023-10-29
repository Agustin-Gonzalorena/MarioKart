import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <p className="warningMobile">Only Mobile</p>
      <p>© 2023 Developed by </p>
      <a
        href="https://portfolio-agustin-gonzalorena.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../../public/MyLogoAG.svg"
          alt=""
          style={{ height: "30px" }}
        />
        <strong>Agustín Gonzalorena</strong>
      </a>
    </footer>
  );
};

export default Footer;
