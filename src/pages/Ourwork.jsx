import React from "react";
import { Link } from "react-router-dom";
import Cardimg from "../image/wordpress-elementor-developer-designer-astra-theme-frontend-1024x811.webp";
import Form from "../components/Form";
import Logo from "../components/Logo";

const Ourwork = () => {
  return (
    <div>
      <section className="our-banner-wrapper servicebanner-wrapper">
        <div className="container">
          <div className="banner-content">
            <div className="about-inner service-wrapper">
              <h1>Our Company</h1>
              <p>
                Aghadi Infotech was founded in 2012 as a Web Development Company
                as well as a Web Design Company to offers professional Web
                Design and Development as well as Offshore Software Development
                Solutions to clients at both global and domestic.
              </p>
              <div className="btn">
                <Link href="#">Know more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-wrapper">
        <div className="container">
          <div className="portfolio-content">
            <div className="portfolio-title">
              <h2>Web Development & Web Design Portfolio</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <div className="portfolio-img">
                    <img src={Cardimg} alt="" />
                  </div>
                  <div className="portfolio-title">
                    <h3>Tradeline Express</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <div className="portfolio-img">
                    <img src={Cardimg} alt="" />
                  </div>
                  <div className="portfolio-title">
                    <h3>Tradeline Express</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <div className="portfolio-img">
                    <img src={Cardimg} alt="" />
                  </div>
                  <div className="portfolio-title">
                    <h3>Tradeline Express</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <div className="portfolio-img">
                    <img src={Cardimg} alt="" />
                  </div>
                  <div className="portfolio-title">
                    <h3>Tradeline Express</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <div className="portfolio-img">
                    <img src={Cardimg} alt="" />
                  </div>
                  <div className="portfolio-title">
                    <h3>Tradeline Express</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <div className="portfolio-img">
                    <img src={Cardimg} alt="" />
                  </div>
                  <div className="portfolio-title">
                    <h3>Tradeline Express</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <div className="portfolio-img">
                    <img src={Cardimg} alt="" />
                  </div>
                  <div className="portfolio-title">
                    <h3>Tradeline Express</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <div className="portfolio-img">
                    <img src={Cardimg} alt="" />
                  </div>
                  <div className="portfolio-title">
                    <h3>Tradeline Express</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <div className="portfolio-img">
                    <img src={Cardimg} alt="" />
                  </div>
                  <div className="portfolio-title">
                    <h3>Tradeline Express</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Logo />
      <Form />
    </div>
  );
};

export default Ourwork;
