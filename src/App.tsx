import React from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";

import "./styles/style.scss";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <!-- Start search box --> */}
      {/* <div id="mu-search">
        <div className="mu-search-area">
          <button className="mu-search-close">
            <span className="fa fa-close"></span>
          </button>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form className="mu-search-form">
                  <input
                    type="search"
                    placeholder="Type Your Keyword(s) &amp; Hit Enter"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- End search box --> */}
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
