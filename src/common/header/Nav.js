import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-menu text-center">
      <nav>
        <ul className="main-menu__list">
          <li>
            <Link to={process.env.PUBLIC_URL + `/`}>Home</Link>
            {/* <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + `/`}>Home</Link>
              </li>
              <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Home Two</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Home Three</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-four`}>Home Four</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-five`}>Home Five</Link></li>
              <li className="dropdown">
                <Link to={process.env.PUBLIC_URL + `/`}>Header Styles</Link>
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/`}>Header One</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/home-two`}>
                      Header Two
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/home-three`}>
                      Header Three
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/home-four`}>
                      Header Four
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/home-five`}>
                      Header Five
                    </Link>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          {/* <li> */}
          {/* <Link to={process.env.PUBLIC_URL + `/about-one`}>About</Link> */}
          {/* <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + `/about-one`}>
                  About One
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/about-two`}>
                  About Two
                </Link>
              </li>
            </ul> */}
          {/* </li> */}
          <li className="dropdown">
            <Link to={process.env.PUBLIC_URL + `#`}>Services</Link>
            <ul>
              {/* <li>
                <Link to={process.env.PUBLIC_URL + `/services`}>Services</Link>
              </li> */}
              <li>
                <Link to={process.env.PUBLIC_URL + `/general-contracting`}>
                  Eletrical Engineering
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/metrial-managment`}>
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/building-renovation`}>
                  Eletronic Engineering
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/architecture-design`}>
                  Information Technology
                </Link>
              </li>
              {/* <li>
                <Link to={process.env.PUBLIC_URL + `/multistory-build`}>
                  Multistory Build
                </Link>
              </li> */}
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/team-details`}>
              Team Details
            </Link>
            {/* <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + `/portfolio`}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/portfolio-details`}>
                  Portfolio Details
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/team`}>Team</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/team-details`}>
                  Team Details
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/testimonials`}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/pricing`}>Pricing</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/faq`}>Faq</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + `/error`}>Error</Link>
              </li>
            </ul> */}
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/contact`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
