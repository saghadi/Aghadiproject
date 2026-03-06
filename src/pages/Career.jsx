import React from "react";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div>
      <section className="contact-wrapper servicebanner-wrapper">
        <div className="conatiner">
          <div className="banner-content">
            <div className="about-inner service-wrapper">
              <h1>Join Our Team</h1>
              <p>
                We are a passionate and dedicated team of designers, developers,
                analysts, strategists, and project managers. We want dedicated
                people like you in our team.
              </p>
              <p>
                We at Aghadi Infotech, Believe that a challenge is a great
                opportunity to prove yourself. Many people do not reach the
                level they are capable of, because they don’t challenge
                themselves enough.
              </p>
              <div className="btn">
                <Link href="#">View Jobs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
