import React from 'react'
import bannerImg from '../image/banner-new14.png'
import CountUp from 'react-countup';


const Banner = () => {
    return (
        <>
            <section className="banner_main">
                <div className="container">
                    <div className="banner_section_in">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner-description">
                                    <span>Small to Large Businesses</span>
                                    <h1>Website Design & Development Services We Develop For All</h1>
                                    <p>We’re an Indian Web Development Company as well as Web Designing focused only on
                                        offshore Web Development Services.
                                    </p>
                                    <div className="btn">
                                        <a href="#">Contact us</a>
                                    </div>
                                </div>
                                <div className="counter-section">
                                    <div className="row">
                                        <div className="col-6 col-sm-3">
                                            <div className="wrapper">
                                                <p className="counter m-0">
                                                    <CountUp end={2000} duration={7} /><span>+</span>
                                                </p>
                                                <strong>Projects Delivered</strong>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-3">
                                            <div className="wrapper">
                                                <p className="counter m-0">
                                                    <CountUp end={350} duration={9} /><span>+</span>
                                                </p>
                                                <strong>Happy Clients</strong>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-3">
                                            <div className="wrapper">
                                                <p className="counter m-0">
                                                    <CountUp end={98} duration={11} /><span>%</span>
                                                </p>
                                                <strong>Clients Retention</strong>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-3">
                                            <div className="wrapper">
                                                <p className="counter m-0">
                                                    <CountUp end={350} duration={9} /><span>+</span>
                                                </p>
                                                <strong>Clients Served</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="banner-image">
                                    <img src={bannerImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner