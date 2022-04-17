import React from "react";
import "./index.scss";
import PersonInfo from "./PersonInfo";

const TeamInfo = () => {
    const dev1_desc = "I am senior Blockchain Engineer and have good experience in P2E game development on WAX and other platforms";
    return (
        <div className="team-intro" id = "team">
            <div className="team-intro-header">
                <img src="/image/ourteam.png"/>
            </div>
            
            <div className="team-intro-contents">
                <PersonInfo photo = "dev1.png" name = "James Berry" description = {dev1_desc}/>
                <PersonInfo photo = "dev2.png" name = "Juliman" description = {dev1_desc}/>
                <PersonInfo photo = "dev3.png" name = "Designer" description = {dev1_desc}/>
            </div>
        </div>
    );
};

export default TeamInfo;

