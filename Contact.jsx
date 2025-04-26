import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    return (
        <div>
            <section className="contact-section spad" style={{ bottom: 250, width: "100%", marginTop:'120px' }}>
            <div className="container text-center">
            <div className="row">
                <div className="col-lg-12">
                <div className="contact-info">
                    <div className="text-center">
                    <h4 style={{ fontWeight: 'bold' }}>Contact Us</h4>
                    </div>
                    <br /><br />
                    <div className="contact-address row">
                    <div className="col-lg-4">
                        <div className="ca-widget">
                        <div className="cw-icon">
                            <img src="/img/icon/icon-2.png" alt="" />
                        </div>
                        <div className="cw-text">
                            <h3 style={{ color: "black" }}>Contact:</h3><br />
                            <p>+91 9564******</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ca-widget">
                        <div className="cw-icon">
                            <img src="/img/icon/icon-3.png" alt="" />
                        </div>
                        <div className="cw-text">
                            <h3 style={{ color: "black" }}>Send Mail</h3><br />
                            <p>gym****@***abc.com</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <div className="ca-widget">
                        <div className="cw-icon">
                            <img src="/img/icon/icon-1.png" alt="" />
                        </div>
                        <div className="cw-text">
                            <h3 style={{ color: "black" }}>Our Location</h3><br />
                            <p>ABC XYZ **** 123</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Contact