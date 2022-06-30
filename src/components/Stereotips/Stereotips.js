import React from "react";
import "./Stereotips.css"
import stereoImg from "./img/stereo.svg"

const Stereotips = () => {
    return(
        <div className="stereotips">
            <img className="stereo-img" src={stereoImg} alt="stereoImg"/>
        </div>
    )
}

export default Stereotips