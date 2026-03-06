import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Ourcompany = () => {
  return (
    <div>
      <section className="servicebanner-wrapper Ourcompany-wrapper">
        <div className="container">
          <div className="banner-content">
            <div className="about-inner service-wrapper">
              <h1>Our company</h1>
              <p>
                Aghadi Infotech was founded in 2012 as a Web Development Company
                as well as a Web Design Company to offers professional Web
                Design and Development as well as Offshore Software Development
                Solutions to clients at both global and domestic.
              </p>
              <div className="btn">
                <Link href="#">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="couter-wrapper">
        <div className="container">
          <div className="counter-section counter-content">
            <div className="row">
              <div className="col-6 col-sm-3">
                <div className="wrapper">
                  <p className="counter m-0">
                    <CountUp end={2000} duration={7} />
                    <span>+</span>
                  </p>
                  <strong>Projects Delivered</strong>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="wrapper">
                  <p className="counter m-0">
                    <CountUp end={350} duration={9} />
                    <span>+</span>
                  </p>
                  <strong>Happy Clients</strong>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="wrapper">
                  <p className="counter m-0">
                    <CountUp end={98} duration={11} />
                    <span>%</span>
                  </p>
                  <strong>Clients Retention</strong>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="wrapper">
                  <p className="counter m-0">
                    <CountUp end={350} duration={9} />
                    <span>+</span>
                  </p>
                  <strong>Clients Served</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="couter-text">
            <p>
              Over the years, Aghadi Infotech has evolved into a one-stop
              solution for customized, comprehensive, feasible, and affordable
              web-based solutions for all types of business requirements and
              become a worldwide presence in multiple countries like United
              States, United Kingdom, Canada, Australia, and more.
            </p>
          </div>
          <div className="mission-box">
            <div className="row">
              <div className="col-lg-6">
                <div className="mission-card">
                  <h4>Our Mission</h4>
                  <p>
                    To offer high-quality web development as well as web design
                    services with honesty, reliability, and transparency with
                    reasonable margins, while maintaining profitability.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission-card">
                  <h4>Our Vision</h4>
                  <p>
                    To become the most Trusted and Recognized Web development
                    and Web design company based out of India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourcompany;
