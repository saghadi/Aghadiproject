import React from 'react'
import CountUp from 'react-countup';
import Mission from '../image/mission-img.jpg'

const About = () => {
    return (
        <>
            <section className="about-main">
                <div className="container">
                    <div className="about-inner">
                        <h1>Our Company</h1>
                        <p>
                            Aghadi Infotech was founded in 2011 as a Web Development Company as well as a Web Design Company to offers professional Web Design
                            and Development as well as Offshore Software Development Solutions to clients at both global and domestic.
                        </p>
                        <div className="btn">
                            <a href="#">Know More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="counter-sec">
                <div className="container">
                    <div className="counter-main">
                        <div className="counte-inn">
                            <p>
                                <CountUp end={2000} duration={7} /> <span>+</span>
                            </p>
                            <strong>Project Completed</strong>
                        </div>
                        <div className="hr"></div>
                        <div className="counte-inn">
                            <p>
                                <CountUp end={11} duration={7} /> <span>+</span>
                            </p>
                            <strong>Years of Experience</strong>
                        </div>
                        <div className="hr"></div>
                        <div className="counte-inn">
                            <p>
                                <CountUp end={350} duration={7} /> <span>+</span>
                            </p>
                            <strong>Happy Clients</strong>
                        </div>
                        <div className="hr"></div>
                        <div className="counte-inn">
                            <p>
                                <CountUp end={15} duration={7} /> <span>+</span>
                            </p>
                            <strong>In-House Team</strong>
                        </div>
                        <div className="hr"></div>
                        <div className="counte-inn">
                            <p>
                                <CountUp end={80} duration={7} /> <span>%</span>
                            </p>
                            <strong>Are Experienced</strong>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mission-sec">
                <div className="container">
                    <div className="mission-main">
                        <div className="row">
                            <div className="col-4">
                                <div className="our-mission">
                                    <div className="mission-inn">
                                        <h3>Our Mission</h3>
                                        <p>To offer high-quality web development as well as web design services with honesty, reliability,
                                            and transparency with reasonable margins, while maintaining profitability.
                                        </p>
                                    </div>
                                    <div className="mission-img">
                                        <img src={Mission} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4"></div>
                            <div className="col-4">
                                <div className="our-vision">
                                    <div className="vision-img mission-img">
                                        <img src={Mission} alt="" />
                                    </div>
                                    <div className="vision-inn">
                                        <h3>Our Vision</h3>
                                        <p>To offer high-quality web development as well as web design services with honesty, reliability,
                                            and transparency with reasonable margins, while maintaining profitability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About