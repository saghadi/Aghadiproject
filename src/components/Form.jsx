import React, { useState } from "react";
import Google from "../image/google.svg";
import Upwork from "../image/upwork.svg";
import Clutch from "../image/clutch.svg";

const API_URL = "https://aghadi-node.onrender.com/api/auth/register";

// Strong random password generator
function generatePassword(length = 12) {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?";
  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += chars[array[i] % chars.length];
  }
  return pass;
}

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
    password: "", // ✅ add
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let services = [...form.services];
      if (checked) services.push(value);
      else services = services.filter((s) => s !== value);

      setForm((prev) => ({ ...prev, services }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ✅ generate password on submit
    const newPassword = generatePassword(12);

    try {
      const payload = {
        ...form,
        password: newPassword, // ✅ send to API
      };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      // ✅ your backend returns ok: true (not success)
      if (data.ok) {
        setStatus("success");

        // optional: show password to user (if you want)
        // alert(`Account created. Password: ${newPassword}`);

        setForm({
          name: "",
          email: "",
          phone: "",
          services: [],
          message: "",
          password: "",
        });
      } else {
        console.log("API error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const servicesList = [
    "Web Design",
    "Web Develop",
    "UI/UX",
    "E-Commerce",
    "WordPress Development",
    "Woo-Commerce",
    "Digital Marketing",
  ];

  return (
    <section className="form-sec sec">
      <div className="container">
        <div className="upper-box">
          <h2>Need An Estimate?</h2>
        </div>

        <div className="form-inn">
          <div className="row">
            <div className="col-md-6">
              <div className="form-main">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6 mb-4">
                      <input
                        className="w-100 pt-4 pb-4 ps-4 rounded-2 border-0"
                        type="text"
                        placeholder="Your Name..."
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-6">
                      <input
                        className="w-100 pt-4 pb-4 ps-4 rounded-2 border-0"
                        type="email"
                        placeholder="Your Email..."
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <input
                        className="w-100 pt-4 pb-4 ps-4 rounded-2 border-0"
                        type="text"
                        placeholder="Skype or WhatsApp Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <h4 className="mt-5 fw-bold text-white">
                        Services you need:
                      </h4>
                      <div className="checkbox-main">
                        {servicesList.map((service) => (
                          <div className="checkbox" key={service}>
                            <label>
                              {service}
                              <input
                                type="checkbox"
                                name="services"
                                value={service}
                                checked={form.services.includes(service)}
                                onChange={handleChange}
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12">
                      <div className="message-box">
                        <textarea
                          rows="4"
                          className="w-100"
                          placeholder="Say something about your project such as requirements, goals, etc.."
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-btn">
                    <button className="btn" type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "SENDING..." : "SEND ME FREE QUOTE"}
                    </button>
                  </div>

                  {status === "success" && (
                    <p className="mt-3 text-success">
                      Thank you! We received your message.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-3 text-danger">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="about-project">
                <h3>Tell us about your project!</h3>
                <ul>
                  <li>Get Free Project Estimates</li>
                  <li>Recommendations</li>
                  <li>Custom Solutions</li>
                  <li>8 to 10 Hours of Response Time</li>
                  <li>Get Free Project Estimates</li>
                  <li>Recommendations</li>
                </ul>
                <div className="logos">
                  <a href="#"><img src={Google} alt="Google" /></a>
                  <a href="#"><img src={Upwork} alt="Upwork" /></a>
                  <a href="#"><img src={Clutch} alt="Clutch" /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
