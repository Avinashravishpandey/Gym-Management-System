import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div>
            <section className="about-section spad" style={{ width: "100%", marginTop:'120px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-pic">
                                <img src="/img/about-pic.jpg" alt="" />
                                <Link to="https://www.youtube.com/watch?v=SlPhMPnQ58k" className="play-btn video-popup">
                                    <img src="/img/play.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text">
                                <h2>Story About Us</h2>
                                <p className="first-para">Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium
                                    sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate
                                    cursus a amet.</p>
                                <p className="second-para">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida
                                    quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                    rhoncus, gravida quam semper libero sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About