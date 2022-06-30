import React from "react";
import "./People.css"

const People = ({people}) => {
    return(
        <div className="people-profile">
            <img className="profile-img" width={80} src={people.img} alt={people.name}/>
            <p className="profile-name">{people.name}</p>
            <p className="profile-prof">{people.prof}</p>
            <button className="profile-btn">Стежити</button>
        </div>
    )
}

export default People