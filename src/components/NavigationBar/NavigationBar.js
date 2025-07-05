import React, { useState } from "react";
import "./NavigationBar.css";
import logo from "../../accets/logo/Screenshot_35.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="nav-container">
      <div className="nav-content">
        <div className="nav-left">
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <ul className="nav-left-menu">
            <li>
              <Link to="#">
                About Us <FontAwesomeIcon icon={faAngleDown} />
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="#">Our Story</Link>
                </li>
                <li>
                  <Link to="#">Vision & Mission</Link>
                </li>
                <li>
                  <Link to="#">Our Team</Link>
                </li>
                <li>
                  <Link to="#">Partners & Affiliations</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">
                What We Do <FontAwesomeIcon icon={faAngleDown} />
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="#">Research Services</Link>
                </li>
                <li>
                  <Link to="#">Training & Capacity Building</Link>
                </li>
                <li>
                  <Link to="#">Consultancy & Advisory</Link>
                </li>
                <li>
                  <Link to="#">IT & BPO Solutions</Link>
                </li>
                <li>
                  <Link to="#">Market Studies</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">
                Projects <FontAwesomeIcon icon={faAngleDown} />
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="#">Ongoing</Link>
                </li>
                <li>
                  <Link to="#">Completed</Link>
                </li>
                <li>
                  <Link to="#">Impact Highlights</Link>
                </li>
                <li>
                  <Link to="#">Collaborations</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        <ul className={`nav-right-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="#">
              Training <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="#">Upcoming Trainings</Link>
              </li>
              <li>
                <Link to="#">Methodology</Link>
              </li>
              <li>
                <Link to="#">Online Platform</Link>
              </li>
              <li>
                <Link to="#">IGA Training</Link>
              </li>
              <li>
                <Link to="#">Certificates</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              Publications <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="#">Reports</Link>
              </li>
              <li>
                <Link to="#">Policy Briefs</Link>
              </li>
              <li>
                <Link to="#">Blogs</Link>
              </li>
              <li>
                <Link to="#">Datasets</Link>
              </li>
              <li>
                <Link to="#">Annual Reports</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              Get Involved <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="#">Partner</Link>
              </li>
              <li>
                <Link to="#">Join Training</Link>
              </li>
              <li>
                <Link to="#">Consultant</Link>
              </li>
              <li>
                <Link to="#">Volunteer</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              News & Events <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="#">Latest News</Link>
              </li>
              <li>
                <Link to="#">Events</Link>
              </li>
              <li>
                <Link to="#">Media Coverage</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              Contact <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="#">Office Info</Link>
              </li>
              <li>
                <Link to="#">Inquiries</Link>
              </li>
              <li>
                <Link to="#">Work With Us</Link>
              </li>
              <li>
                <Link to="#">Request Proposal</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavigationBar;
