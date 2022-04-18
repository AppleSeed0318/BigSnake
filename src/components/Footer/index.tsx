import React from "react";
import "./index.scss"

const Footer = () => {
    return (
        <div className="footer" id = "about">
            <div className="footer-title">
                <div className="logo">
                    <img src="/image/footer/footer-title.png" />
                </div>
            </div>
            <div className="footer-contents">
                <div className="outside-links">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Company Profile</a></li>
                        <li><a href="#">CSR Initiatives</a></li>
                        <li><a href="#">Read Articles</a></li>
                        <li><a href="#">Media Kit</a></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul>
                        <li><a href="#"><img src="/image/icon-twitter.svg" /></a></li>
                        <li><a href="#"><img src="/image/icon-discord.svg" /></a></li>
                        <li><a href="#"><img src="/image/icon-telegram.svg" /></a></li>
                        <li><a href="#"><img src="/image/icon-instagram.svg" /></a></li>
                    </ul>
                </div>
                <div className="outside-links">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="#">Employee Portal</a></li>
                        <li><a href="#">Customer Portal</a></li>
                        <li><a href="#">Offices</a></li>
                        <li><a href="#">Know More</a></li>
                    </ul>
                </div>
            </div>
            <div className="copy-right">
                <p><b>Copyright © 2022</b></p>
            </div>
        </div>
    );
};

export default Footer;

