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
                    <h3>Links</h3>
                    <ul>
                        <li><a href="https://discord.gg/hEHz59ur9D">Discord Server</a></li>
                        <li><a href="https://wax.atomichub.io/explorer/collection/bigsnakesp2e">Atomichub</a></li>
                        <li><a href="https://neftyblocks.com/c/bigsnakesp2e">Nifty blocks</a></li>
                        <li><a href="https://twitter.com/BigSnakes_P2E">Twitter</a></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul>
                        <li><a href="https://twitter.com/BigSnakes_P2E"><img src="/image/icon-twitter.svg" /></a></li>
                        <li><a href="https://discord.gg/hEHz59ur9D"><img src="/image/icon-discord.svg" /></a></li>
                        <li><a href="https://wax.atomichub.io/explorer/collection/bigsnakesp2e"><img src="/image/icon-atomic.svg" /></a></li>
                        <li><a href="https://neftyblocks.com/c/bigsnakesp2e"><img src="/image/icon-neftyblock.png" /></a></li>
                    </ul>
                </div>
                <div className="outside-links">
                    <h3>More Info</h3>
                    <ul>
                        <li><a href="https://big-snakes.gitbook.io/big-snakes/">White Paper</a></li>
                        <li><a href="https://big-snakes.gitbook.io/big-snakes/more-information/flow-chart">Flow Chart</a></li>
                        <li><a href="https://big-snakes.gitbook.io/big-snakes/more-information/road-map">Roadmap</a></li>
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

