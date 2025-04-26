import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AdminIndex = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8081/dashboard')
      .then(res => {
        if (res.data.Status === "Success") {
          const users = res.data.Result;
          if (res.data.role === "admin") {
            navigate('/');
          } else {
            navigate('/index');
          }
          setUsers(users);
        } else {
          navigate('/index');
        }
      })
      .catch(err => {
        console.log(err);
        navigate('/index');
      });
  }, []);

  
  const handleLogout = () => {
    axios
      .get('http://localhost:8081/logout')
      .then(res => {
        navigate('/index');
      })
      .catch(err => console.log(err));
  };
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <header className="header-section border" style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="logo">
            <div className="section-title">
              <br />
              <h2 style={{ color: "Gold" }}>Gym Management System</h2>
            </div>
          </div>
          <div className="nav-menu">
            <nav className="mainmenu mobile-menu logo">
              <ul>
                <li className="active"><Link to="/" style={{ color: "red" }}>Home</Link></li>
                <li>
                  <NavDropdown title={<span style={{ color: "Gold" }}>Enquiry</span>} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/addEnquiry" className="text-center" style={{ color: "red", marginTop: "-250px" }}>
                      Add Enquiry
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/manageEnquiry" className="text-center" style={{ color: "red", marginTop: "-250px" }}>
                      Manage Enquiry
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title={<span style={{ color: "red" }}>Plan</span>} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/addPlan" className="text-center" style={{ color: "red", marginTop: "-250px" }}>
                      Add Plan
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/managePlan" className="text-center" style={{ color: "red", marginTop: "-250px" }}>
                      Manage Plan
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title={<span style={{ color: "red" }}>Equipment</span>} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/addEquipment" className="text-center" style={{ color: "red", marginTop: "-250px" }}>
                      Add Equipment
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/manageEquipment" className="text-center" style={{ color: "red", marginTop: "-250px" }}>
                      Manage Equipment
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <NavDropdown title={<span style={{ color: "red" }}>Member</span>} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/addMember" className="text-center" style={{ color: "red", marginTop: "-250px" }}>
                      Add Member
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/manageMember" className="text-center" style={{ color: "red", marginTop: "-250px" }}>
                      Manage Member
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li onClick={handleLogout}><Link to="" style={{ color: "red" }}>Log-Out</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <br /> 
      <br />
      <br />
      <br />
      <br />
      <h2 className='border col-md-3' style={{ color: 'teal' }}>
        Welcome :  
        {users.map((user, index) => (
          <span key={index}>{user.username}</span>
        ))}
      </h2>
      <Outlet />
      <footer className="footer-section text-center">
          <div className="container">
              <div className="row">
              <div className="copyright-text">
                  <div>
                  <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                <i className="fab fa-facebook-square"></i>
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                <i className="fab fa-dribbble"></i>
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2">
                <i className="fab fa-github" href="https://github.com/Avinashravishpandey"> </i><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/Avinashravishpandey"></a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a></li>
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a></li>
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/Avinashravishpandey">Github</a></li>
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a></li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a></li>
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms & Conditions</a></li>
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a></li>
                  <li><a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noreferrer"
              >
                {" "}Notus JS by{" "}
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blueGray-500 hover:text-blueGray-800"
                target="_blank"
                rel="noreferrer"
              >
                Creative Tim
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
                  </div>
              </div>
          </div>
          </div>
      </footer>

    </div>
  );
};

export default AdminIndex;
