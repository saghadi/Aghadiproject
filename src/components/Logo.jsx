import React from 'react'
import Html from '../image/html.svg';
import Css from '../image/css.svg';
import Js from '../image/js.svg';
import Wordpress from '../image/wp.svg'
import Tailwind from '../image/tailwind.svg'
import Bootstrap from '../image/bootstrap.svg'
import Php from '../image/php.svg'

const Logo = () => {
    return (
        <>
            <section className="banner-sec sec">
                <div className="container">
                    <div className="banner-main">
                        <div className="upper-box">
                            <h2>Technologies We Use</h2>
                            <p>At Aghadi Infotech, Our team of highly skilled and expert developers and designers uses all
                                the latest technologiesavailable in the market to offer secure and scalable web projects to
                                our clients.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="icons">
                <div className="container">
                    <div className="slider">
                        <div className="slide-track">
                            <div className="slide">
                                <img src={Html} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Css} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Js} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Wordpress} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Tailwind} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Bootstrap} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Php} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Html} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Css} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Js} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Wordpress} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Tailwind} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Bootstrap} alt="" />
                            </div>
                            <div className="slide">
                                <img src={Php} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Logo