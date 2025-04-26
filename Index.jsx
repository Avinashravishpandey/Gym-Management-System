import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Index = () => {
    return (
        <div>

            <header className="header-section border" style={{ backgroundColor: "aqua" }}>
                <div className="container">
                    <div className="logo">
                        <div className="section-title">
                            <br />
                            <h2 style={{ color: "black"  }}>Gym Management System</h2>
                        </div>
                    </div>
                    <div className="nav-menu">
                        <nav className="mainmenu mobile-menu logo">
                            <ul>
                            <Link to="/" style={{ color: "black" }}><li className="active">Home</li></Link>
                                <Link to="about" style={{ color: "black" }}><li>About</li></Link>
                                <Link to="contact" style={{ color: "black" }}><li>Contact</li></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
           <Outlet /> 
            
        </div>
    )
}

export default Index