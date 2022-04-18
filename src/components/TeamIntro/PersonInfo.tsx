import React from "react";
import "./person.scss"

export interface PersonData {
  photo: string,
  name: string,
  title: string,
  description: string,
}

const PersonInfo = ({photo, name, title, description}:PersonData) => {
    return (
        <div className="person-info">
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

