import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/login", values);
      if (response.data.Status === "Success") {
        navigate("/");
        alert("Login Successful");
      } else {
        setError(response.data.Error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section
        className="hero-section set-bg"
        style={{ backgroundImage: "url('img/hero-bg.jpg')" }}
      >
        <div className="container" style={{ marginTop: "-150px" }}>
          <div className="row">
            <div className="col-lg-5">
              <div className="hero-text">
                <div className="register-text">
                  <div className="text-danger text-center">
                    <h4>{error && error}</h4>
                  </div>
                  <br />
                  <div className="section-title">
                    <h2>Admin Login</h2>
                  </div>
                  <form className="register-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <label htmlFor="username" style={{ color: "black" }}>
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          placeholder="Enter Your Username"
                          name="username"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <label htmlFor="password" style={{ color: "black" }}>
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          placeholder="Enter Your Password"
                          name="password"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <button type="submit" className="register-btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>UNLIMITED CLASSES</h2>
          </div>
        </div>
      </div>
      <section className="services-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-pic">
                <img src="img/services/service-pic.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-items">
                <div className="row">
                  <div className="col-md-6">
                    <div className="services-item bg-gray">
                      <img src="img/services/service-icon-1.png" alt="" />
                      <h4>Strategies</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                    <div className="services-item bg-gray pd-b">
                      <img src="img/services/service-icon-3.png" alt="" />
                      <h4>Workout</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-item">
                      <img src="img/services/service-icon-2.png" alt="" />
                      <h4>Yoga</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                    <div className="services-item pd-b">
                      <img src="img/services/service-icon-4.png" alt="" />
                      <h4>Weight Loss</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <footer
        className="footer-section text-center"
        style={{ bottom: 0, width: "100%" }}
      >
        <div className="container">
          <div className="row">
            <div className="copyright-text">
              <div>
                <p>
                  &copy; {currentYear} All rights reserved | This template is
                  made with <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                  by XYZ
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
