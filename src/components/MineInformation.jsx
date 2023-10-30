import React, { useEffect, useState } from "react";
import "../styles/mineInformation.css";

import NavBar from "./NavBar";
import MineInformation1 from "../assets/MineInformation1.png";
import MineInformation2 from "../assets/MineInformation2.png";

const MineInformation = () => {
    const [mine, setMine] = useState({
        name: "Emerald",
        location: "Seattle, Washington",
        facility: "Evergreen Mining Facility",
        perCarat: "500",
        reserveEstimate: "500,000",
        mineScale: "Medium-Sized Mine",
    });

    // useEffect(() => {
    //     get data from backend and use setMine
    // })

    return (
        <div className="container">
            <div className="header">
                <span className="title">Opal Oasis</span>
                <span className="data-selector">DATA #01 SELECT BY LEFT</span>
            </div>
            <div className="nav">
                <NavBar />
            </div>
            <div className="model-section">
                <img
                    src={MineInformation1}
                    alt="Crystal"
                    className="crystal-image"
                />
                <div>
                    <div className="name">{mine.name}</div>
                </div>
                <div>
                    <div className="location">{mine.location}</div>
                </div>
                <div>
                    <div className="facility">{mine.facility}</div>
                </div>
            </div>
            <div className="info-section">
                <img src={MineInformation2} alt="Mine" className="mine-image" />
                <div className="carat">
                    <div className="info-title">PER CARAT</div>
                    <div>${mine.perCarat}</div>
                </div>
                <div className="reserve">
                    <div className="info-title">RESERVE ESTIMATE</div>
                    <div>{mine.reserveEstimate} Tons</div>
                </div>
                <div className="mine-scale">
                    <div className="info-title">MINE SCALE</div>
                    <div>{mine.mineScale}</div>
                </div>
                <div className="mining-method">
                    <div className="info-title">MINING METHOD</div>
                </div>
            </div>
            <div className="footer">
                <span className="info">INFO</span>
                <span className="preview-download">PREVIEW / DOWNLOAD</span>
            </div>
        </div>
    );
};

export default MineInformation;
