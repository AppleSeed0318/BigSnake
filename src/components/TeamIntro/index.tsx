import React from "react";
import "./index.scss";
import PersonInfo from "./PersonInfo";

const TeamInfo = () => {
    const dev1_desc = "James has worked in the blockchain p2e game, website development for 8 years.";
    const dev2_desc = "Hou has been in the WAX P2E space for over 10 years, he has experience working as a smart contract and as a creative project manager.";
    const dev3_desc = "Designer has worked in logo design.";
    return (
        <div className="team-intro" id = "team">
            <div className="team-intro-header">
                <img src="/image/ourteam.png"/>
            </div>
            
            <div className="team-intro-contents">
                <PersonInfo photo = "Juliman.png" name = "Hou Fanglin" title = "Project Manager" description = {dev2_desc}/>
                <PersonInfo photo = "james.png" name = "James Berry" title = "Senior Blockchain Engineer" description = {dev1_desc}/>
                <PersonInfo photo = "dev3.png" name = "Designer" title = "Logo Designer" description = {dev3_desc}/>
            </div>
        </div>
    );
};

export default TeamInfo;

