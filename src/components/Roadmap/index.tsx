import React, { useEffect, useState } from "react";
import "./index.scss"

import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {


    return (
        <div className="roadmap" id = "roadmap" >
            <div className="roadmap-title align-center" data-aos="fade-up">
                <img src="/image/roadmap.png"/>
            </div>
            <div className="roadmap-content1" >
                <div className="text" data-aos="fade-right">
                    <h3>CURRENT</h3>
                    <p>Whitepaper</p>
                    <p>Make a Team</p>
                    <p>Nft's Design</p>
                    <p>Open Discord server</p>
                    <p>+500 members in discord community</p>
                    <p>Whitelist on atomic hub</p>
                    
                    <p>Website</p>
                    <p>Complete all Nft's</p>
                    <p>Whitelist Event</p>
                    <p>Pre-sale</p>
                    <p>special Giveaway for Nft Holders</p>
                    <p>Pre-sale 2nd</p>
                    <p>+5000 members in discord community</p>
                    <p>Game launch</p>
                </div>
                <div className="nft" data-aos="fade-left">
                    
                    <img src = "/image/nft/regeneration_potion_NFT.png"/>
                </div>
                
            </div>
            <div className="roadmap-space">

            </div>
            <div className="roadmap-content2">
                <div className="nft"  data-aos="fade-right">
                    <img src = "/image/nft/BIG_SNAKE_PACK_NFT.png"/>
                </div>
                
                <div className="text" data-aos="fade-left">
                    <h3>UP NEXT</h3>
                    <p>snakes pvp</p>
                    <p>battle arena</p>
                    <p>mobile app ios</p>
                    <p>mobile app android</p>
                    <p>multiplayer</p>
                    <p>Partnerships with other projects</p>

                    <p>snake house</p>
                    <p>live chat in game</p>
                    <p>tokens exchange in-game</p>
                    <p>new nft's</p>
                    <p>improve in gameplay</p>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;

