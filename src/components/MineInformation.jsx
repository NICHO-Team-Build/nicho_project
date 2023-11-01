import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import NavBar from "./NavBar";

import "../styles/mineInformation.css";
import MineInformation1 from "../assets/MineInformation1.png";
import MineInformation2 from "../assets/MineInformation2.png";
import logo from "../assets/logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MineInformation = () => {
    const [mine, setMine] = useState({
        name: "Emerald",
        location: "Seattle, Washington",
        facility: "Evergreen Mining Facility",
        perCarat: "500",
        reserveEstimate: "500,000",
        mineScale: "Medium-Sized Mine",
        method: "Open-Pit Mining",
        equipment: "Diamond Drilling Rigs And Blasting Equipment",
    });

    const [company, setCompany] = useState({
        logo: "",
        name: "Opal",
        fullName: "Opal Oasis",
        data: "01",
    });

    // useEffect(() => {
    //     get data from backend and use setMine
    // })

    //export to a pdf
    function printDocument() {
        const input = document.getElementById("info-container");
        html2canvas(input).then((canvas) => {
            let imgWidth = 208;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            heightLeft -= pageHeight;
            const doc = new jsPDF("p", "mm");
            doc.addImage(
                canvas,
                "PNG",
                0,
                position,
                imgWidth,
                imgHeight,
                "",
                "FAST"
            );
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(
                    canvas,
                    "PNG",
                    0,
                    position,
                    imgWidth,
                    imgHeight,
                    "",
                    "FAST"
                );
                heightLeft -= pageHeight;
            }
            doc.save(mine.name + ".pdf");
        });
    }

    return (
        <div className="container">
            <div className="company-container">
                <div className="company-section">
                    <div
                        className="company-logo"
                        style={{ backgroundImage: `url(${logo})` }}
                    ></div>
                    <div className="company-text">
                        <div>{company.name}</div>
                        <div>{company.fullName}</div>
                    </div>
                </div>

                <div className="data-section">
                    <div>DATA #{company.data}</div>
                    <div className="data-subtext">SELECT BY LEFT</div>
                </div>
            </div>
            <NavBar />
            <div id="info-container">
                <div className="model-section">
                    <div
                        className="crystal-image"
                        style={{ backgroundImage: `url(${MineInformation1})` }}
                    >
                        <div className="model-info">
                            <div className="mine-name">
                                <div>{mine.name}</div>
                            </div>
                            <div className="mine-location">
                                <div>
                                    <LocationOnIcon />
                                    {mine.location}
                                </div>
                            </div>
                            <div className="mine-facility">
                                <div>{mine.facility}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-section">
                    <div
                        className="mine-image"
                        style={{ backgroundImage: `url(${MineInformation2})` }}
                    ></div>
                    <div className="mining-container">
                        <div className="first-container">
                            <div className="horizontal-container">
                                <div className="carat-section">
                                    <div className="info-title">PER CARAT</div>
                                    <div>${mine.perCarat}</div>
                                </div>
                                <div className="reserve-section">
                                    <div className="info-title">
                                        RESERVE ESTIMATE
                                    </div>
                                    <div>{mine.reserveEstimate}Tons</div>
                                </div>
                            </div>
                            <div className="scale-section">
                                <div className="info-title">MINE SCALE</div>
                                <div>{mine.mineScale}</div>
                            </div>
                        </div>
                        <div>
                            <div className="info-title">MINING METHOD</div>
                            <div>{mine.method}</div>
                        </div>
                        <div>
                            <div className="info-title">Equipment</div>
                            <div>{mine.equipment}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <span className="info">INFO</span>
                <button className="download" onClick={printDocument}>
                    DOWNLOAD
                </button>
            </div>
        </div>
    );
};

export default MineInformation;
