import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Hirely</h2>
          </div>
          <div className="right">
            <div className="social">
              <span>Mentions your socials here</span>
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
