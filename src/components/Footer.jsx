import React, { useState } from "react";
import FooterLogo from '../image/logo.svg'
import Call from '../image/Call.png'
import Email from '../image/Email.png'
import Location from '../image/Location.png'
import Facebook from '../image/Facebook.png'
import Twitter from '../image/Twitter.png'
import Youtube from '../image/Youtube.png';

const API_URL = "https://aghadi-node.onrender.com/api/subscribe"; 


const Footer = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null); // null | sending | success | error
    const [msg, setMsg] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setMsg("");

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (data.ok) {
                setStatus("success");
                setMsg(data.message || "Subscribed!");
                setEmail("");
            } else {
                setStatus("error");
                setMsg(data.message || "Something went wrong");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
            setMsg("Network error. Please try again.");
        }
    };

    return (
        <>
            <footer className="footer-sec">
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-upper">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="footer-logo">
                                        <img src={FooterLogo} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="social-link">
                                                <div className="social-icon">
                                                    <img src={Call} alt="" />
                                                </div>
                                                <div className="social-content">
                                                    <p>Phone Number</p>
                                                    <h3>+91 99795 54088</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="social-link">
                                                <div className="social-icon">
                                                    <img src={Email} alt="" />
                                                </div>
                                                <div className="social-content email-add">
                                                    <p>Our Email</p>
                                                    <h3>sales@aghadiinfotech.com</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="social-link">
                                                <div className="social-icon">
                                                    <img src={Location} alt="" />
                                                </div>
                                                <div className="social-content">
                                                    <p>Office Address</p>
                                                    <h3>99 Lorem Dummy</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-down">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="about-us">
                                        <h3 className='mb-4'>About</h3>
                                        <p>Aghadi Infotech was founded in 2011 as a Web Development Company as well as a...</p>
                                        <div className="footer-icon">
                                            <div className="icon">
                                                <img src={Facebook} alt="" />
                                            </div>
                                            <div className="icon">
                                                <img src={Twitter} alt="" />
                                            </div>
                                            <div className="icon">
                                                <img src={Youtube} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-all-links">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="about-link">
                                                    <h3 className='mb-4'>useful link</h3>
                                                    <ul>
                                                        <li>About Us</li>
                                                        <li>Job List</li>
                                                        <li>FAQs</li>
                                                        <li>Team</li>
                                                        <li>Contact Us</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="about-link">
                                                    <h3 className='mb-4'>what we do</h3>
                                                    <ul>
                                                        <li>Recruitment</li>
                                                        <li>HR Outsourcing</li>
                                                        <li>Expatriate Services</li>
                                                        <li>Executive Search</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="about-subscribe">
                                        <h3 className='mb-4'>subscribe & get <br />
                                            update repeatedly</h3>
                                        <form onSubmit={handleSubscribe}>
                                            <input
                                                type="email"
                                                placeholder="Your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />

                                            <button type="submit" disabled={status === "sending"}>
                                                {status === "sending" ? "Subscribing..." : "Subscribe now"}
                                            </button>

                                            {msg ? (
                                                <p
                                                    style={{
                                                        marginTop: 10,
                                                        fontSize: 14,
                                                        color: status === "success" ? "green" : "red",
                                                    }}
                                                >
                                                    {msg}
                                                </p>
                                            ) : null}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <p>Made With in India by Aghadi Infotech | Copyright © 2011 – 2025</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer