import React from "react";
import { Link } from "react-router-dom";
import Card1 from "../image/web-design-service-banner 1.svg";
import Form from "../components/Form";
import Logo from "../components/Logo";

const Servicespage = () => {
  return (
    <div>
      <section className="servicebanner-wrapper">
        <div className="container">
          <div className="banner-content">
            <div className="about-inner service-wrapper">
              <h1>Our Services</h1>
              <p>
                We are a quality-focused web development company as well web
                designing company, who works to deliver scalable, and
                affordable, web solutions to our clients across the globe.
              </p>
              <div className="btn">
                <Link href="#">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Offer-wrapper">
        <div className="container">
          <div className="offer-content">
            <div className="offer-title-box">
              <h2>What We Offer</h2>
              <p>
                We create Web Solutions that solve all your web-related business
                needs and our highly skilled developers and designers support
                you and your team at any stage of web development-related needs.
              </p>
            </div>
            <div className="offer-content-card">
              <div className="row">
                <div className="col-lg-4">
                  <div className="offer-card">
                    <div className="offer-img">
                      <img src={Card1} alt="" />
                    </div>
                    <div className="offer-title-box">
                      <h3>Web Design</h3>
                      <p>
                        We will create beautiful designs for any website, web
                        page, or mobile responsive.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="offer-card">
                    <div className="offer-img">
                      <img src={Card1} alt="" />
                    </div>
                    <div className="offer-title-box">
                      <h3>Web Design</h3>
                      <p>
                        We will create beautiful designs for any website, web
                        page, or mobile responsive.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="offer-card">
                    <div className="offer-img">
                      <img src={Card1} alt="" />
                    </div>
                    <div className="offer-title-box">
                      <h3>Web Design</h3>
                      <p>
                        We will create beautiful designs for any website, web
                        page, or mobile responsive.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="offer-card">
                    <div className="offer-img">
                      <img src={Card1} alt="" />
                    </div>
                    <div className="offer-title-box">
                      <h3>Web Design</h3>
                      <p>
                        We will create beautiful designs for any website, web
                        page, or mobile responsive.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="offer-card">
                    <div className="offer-img">
                      <img src={Card1} alt="" />
                    </div>
                    <div className="offer-title-box">
                      <h3>Web Design</h3>
                      <p>
                        We will create beautiful designs for any website, web
                        page, or mobile responsive.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="offer-card">
                    <div className="offer-img">
                      <img src={Card1} alt="" />
                    </div>
                    <div className="offer-title-box">
                      <h3>Web Design</h3>
                      <p>
                        We will create beautiful designs for any website, web
                        page, or mobile responsive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Logo/>
      <Form/>
    </div>
  );
};

export default Servicespage;
