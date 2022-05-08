import React, { useEffect, useState } from "react";
import "./person.scss"

import AOS from "aos";
import "aos/dist/aos.css";

export interface PersonData {
  photo: string,
  name: string,
  title: string,
  description: string,
}

const PersonInfo = ({photo, name, title, description}:PersonData) => {

  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

    return (
        <div className="person-info" data-aos="zoom-in">
            <div className="person-photo">
                
                <img src={"/image/team/" + photo}/>
                <h3 className="person-realname">{name}</h3>
                <h4>{title}</h4>
            </div>
            
            <div className="person-description align-center">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default PersonInfo;

