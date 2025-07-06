import React, { useState } from "react";
import "./NavigationBar.css";
import logo from "../../accets/logo/Screenshot_38-removebg-preview (1).png";
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
                  <Link to="/ourStory">Our Story</Link>
                </li>
                <li>
                  <Link to="/VisionAndMission">Vision & Mission</Link>
                </li>
                <li>
                  <Link to="/ourTeam">Our Team</Link>
                </li>
                <li>
                  <Link to="/partnersAndAffiliations">
                    Partners & Affiliations
                  </Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">
                What We Do <FontAwesomeIcon icon={faAngleDown} />
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="/researchServices">Research Services</Link>
                </li>
                <li>
                  <Link to="/trainingAndCapacityBuilding">
                    Training & Capacity Building
                  </Link>
                </li>
                <li>
                  <Link to="/consultancyAndAdvisory">
                    Consultancy & Advisory
                  </Link>
                </li>
                <li>
                  <Link to="/iTAndBPOSolutions">IT & BPO Solutions</Link>
                </li>
                <li>
                  <Link to="/marketAndImpactStudies">Market Studies</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">
                Projects <FontAwesomeIcon icon={faAngleDown} />
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="/ongoingProjects">Ongoing Projects</Link>
                </li>
                <li>
                  <Link to="/completedProjects">Completed Projects</Link>
                </li>
                <li>
                  <Link to="/impactHighlights">Impact Highlights</Link>
                </li>
                <li>
                  <Link
                    to="/collaborations
"
                  >
                    Collaborations
                  </Link>
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
              Training & Capacity Building{" "}
              <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/UpcomingTrainings">Upcoming Trainings</Link>
              </li>
              <li>
                <Link to="/methodology">Research Methodology Courses</Link>
              </li>
              <li>
                <Link to="/onlineLearning">Online Learning Platform</Link>
              </li>
              <li>
                <Link to="/incomeGenerating">
                  Income Generating Activities (IGA) Training
                </Link>
              </li>
              <li>
                <Link to="/certificate">Certificate Programs</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              Insights & Publications <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/researchReports">Research Reports</Link>
              </li>
              <li>
                <Link to="/PolicyBriefs">Policy Briefs</Link>
              </li>
              <li>
                <Link to="/blogsAndThought">Blogs & Thought Pieces</Link>
              </li>
              <li>
                <Link to="/toolsAndDatasets">Tools & Datasets</Link>
              </li>
              <li>
                <Link to="/annualReports">Annual Reports</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              Get Involved <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="#">Partner with Us</Link>
              </li>
              <li>
                <Link to="#">Join Our Training</Link>
              </li>
              <li>
                <Link to="#">Become a Consultant</Link>
              </li>
              <li>
                <Link to="#">Volunteer Opportunities</Link>
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
                <Link to="#">Events & Webinars</Link>
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
                <Link to="#">General Inquiries</Link>
              </li>
              <li>
                <Link to="#">Work With Us</Link>
              </li>
              <li>
                <Link to="#">Request a Proposal</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavigationBar;
