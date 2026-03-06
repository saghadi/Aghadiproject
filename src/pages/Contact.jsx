import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Logo from "../components/Logo";
import Location from "../image/Location-icon (1).svg";

const Contact = () => {
  return (
    <div>
      <section className="contact-wrapper servicebanner-wrapper">
        <div className="conatiner">
          <div className="banner-content">
            <div className="about-inner service-wrapper">
              <h1>Contact Us</h1>
              <p>
                Please submit your project details for a free discussion call
                and project estimate. We all are here, and our team is happy to
                answer all your questions.
              </p>
              <p>
                Just fill the below form and submit it. Our team will get in
                touch with you within 24 hours. You can also use our other
                contact methods.
              </p>
              <div className="btn">
                <Link href="#">Connect With Uss</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-team-wrapper">
        <div className="container">
          <div className="our-team-content">
            <div className="our-team-title">
              <h3>Connect with Our Team</h3>
            </div>
            <div className="our-team-text">
              <p>
                Need to Get-in-Touch with our Sales, and HR department, email us
                by using the below-mentioned email addresses with your projects,
                ideas, and questions.
              </p>
            </div>
          </div>
          <div className="contact-info-box">
            <div className="row">
              <div className="col-lg-4">
                <div className="info-box">
                  <h5>Have a great idea?</h5>
                  <div className="info-link">
                    <a href="mailto:sales@aghadiinfotech.com">
                      sales@aghadiinfotech.com
                    </a>
                    <p>
                      Tell us more about your business idea to get consulted.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-box">
                  <h5>Have a great idea?</h5>
                  <div className="info-link">
                    <a href="mailto:sales@aghadiinfotech.com">
                      sales@aghadiinfotech.com
                    </a>
                    <p>
                      Tell us more about your business idea to get consulted.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-box">
                  <h5>Have a great idea?</h5>
                  <div className="info-link">
                    <a href="mailto:sales@aghadiinfotech.com">
                      sales@aghadiinfotech.com
                    </a>
                    <p>
                      Tell us more about your business idea to get consulted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Logo />
      <section className="location-wrapper">
        <div className="container">
          <div className="location-icon">
            <a href="https://goo.gl/maps/iR91rptoGxbcm2tw7" target="_blank">
              <img src={Location} alt="" />
            </a>
          </div>
        </div>
      </section>
      <Form />
    </div>
  );
};

export default Contact;
