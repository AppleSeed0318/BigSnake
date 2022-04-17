import React from "react";
import "./person.scss"

export interface PersonData {
  photo: string,
  name: string,
  description: string,
}

const PersonInfo = ({photo, name, description}:PersonData) => {
    return (
        <div className="person-info">
            <div className="person-photo">
                
                <img src={"/image/team/" + photo}/>
                
                <h3 className="person-realname">{name}</h3>
            </div>
            
            <div className="person-description">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default PersonInfo;

