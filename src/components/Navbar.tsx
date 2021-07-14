import { useState } from "react";

import "../styles/style.scss";

import logoImg from "../assets/images/logo/beelaLogo.png";

export function Navbar() {

  
  return (

        <nav className="navbar navbar-light navbar-expand-md" role="navigation" id="mu-menu">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logoImg} alt="Beela" />
            </a>
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about-us-id">
                      About us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownProgrammes"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      Our Programmes
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownProgrammes"
                    >
                      <li>
                        <a className="dropdown-item" href="#programmes-id">
                          Pollination Mentoring Program
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=_zzx0g3HQGSgmQHLzlb3iw&dl_branch=1">
                          Beela's Talk
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="https://beela.us1.list-manage.com/subscribe/post?u=ec3f144b4e769635dffef5601&amp;id=92a05c0895">
                          Beela's Newsletter
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#mu-latest-courses">
                          Beela for Bussines
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownBeehive"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Beehive
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownBeehive"
                    >
                      <li>
                        <a className="dropdown-item" href="#mu-testimonial">
                          Inspirational stories
                        </a>
                      </li>
                      {/* <li>
                        <a className="dropdown-item" href="#">
                          Our Community
                        </a>
                      </li> */}
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="https://www.linkedin.com/groups/12546222/">
                          Beehive group
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownAction"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Take action
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownAction"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Bee a volunteer
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Donate
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                    <form className="mu-search-form">
                        <input type="search" placeholder="Type Your Keyword(s)" />
                        <button className="btn" type="submit">
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /.navbar-collapse --> */}
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </nav>
    
  );
}
