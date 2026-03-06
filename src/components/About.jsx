import React, { useEffect, useRef } from 'react';
import AboutImg from '../image/About-logo.svg';

const About = () => {
    const aboutImageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    aboutImageRef.current.classList.add('animate');
                } else {
                    aboutImageRef.current.classList.remove('animate');
                }
            },
            { threshold: 0.5 }
        );

        if (aboutImageRef.current) {
            observer.observe(aboutImageRef.current);
        }

        return () => {
            if (aboutImageRef.current) {
                observer.unobserve(aboutImageRef.current);
            }
        };
    }, []);

    return (
        <>
            <section className="about-sec sec" id="about">
                <div className="container">
                    <div className="about-inn">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-image">
                                    <img ref={aboutImageRef} src={AboutImg} alt="About Logo" className="about-svg" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-detail">
                                    <h2>About Us</h2>
                                    <p>
                                        Aghadi Infotech was founded in 2011 as a Web Development Company as well as a Web
                                        Design Company to offers professional Web Design and Development as well as Offshore
                                        Software Development Solutions to clients at both global and domestic.
                                        <br />
                                        Our team of highly skilled and experienced designers and developers are working
                                        efficiently to deliver scalable and affordable web solutions for enterprises,
                                        start-ups, development companies, and digital agencies to reduce their efforts,
                                        time, and cost.
                                    </p>
                                    <div className="btn">
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
