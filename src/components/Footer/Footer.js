import React from "react";
import "./Footer.css";
import footerLogo from "../../accets/logo/withoutbackgrounLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBluesky,
  faFacebook,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer_main_div">
      <div className="footer_parent_div">
        <img className="footer_logo" src={footerLogo} alt="" />
        <div className="footer_grid_div">
          <div>
            <h4>SERCOL</h4>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem.</p>
            <div>
              <p>
                <Link>Lorem, ipsum.</Link>
              </p>
              <p>
                <Link>Lorem, ipsum.</Link>
              </p>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+88 01758554545</p>
            <p>info@sercol.com</p>
            <div>
              <p>
                <Link>Lorem, ipsum.</Link>
              </p>
            </div>
          </div>

          <div className="footer_last_cart">
            <h4>Lorem, ipsum.</h4>
            <p>Lorem, ipsum dolor.</p>
            <Link>
              <button className="footer_subscribe">Subscribe</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer_blank_div"></div>

      <div className="footer_flex_div">
        <img className="footer_last_logo" src={footerLogo} alt="" />
        <div className="footer_icon_div">
          <FontAwesomeIcon className="faYoutube" icon={faYoutube} />
          <FontAwesomeIcon className="faXTwitter" icon={faXTwitter} />
          <FontAwesomeIcon className="faBluesky" icon={faBluesky} />
          <FontAwesomeIcon className="faFacebook" icon={faFacebook} />
          <FontAwesomeIcon className="faLinkedin" icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
