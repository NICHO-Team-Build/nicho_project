import React, { useEffect, useState } from "react";
import "../styles/mineInformation.css";

import NavBar from "./NavBar";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import MineInformation1 from "../assets/MineInformation1.png";
import MineInformation2 from "../assets/MineInformation2.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
    
    //export to a pdf
    function printDocument() {
        const input = document.getElementById("container");
        html2canvas(input).then((canvas) => {
            let imgWidth = 208;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            heightLeft -= pageHeight;
            const doc = new jsPDF("p", "mm");
            doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
                heightLeft -= pageHeight;
            }
            doc.save(mine.name + '.pdf');
        });
    }

    return (
        <div id="container">
            <div className="header">
                <span className="title">Opal Oasis</span>
                <span className="data-selector">DATA #01 SELECT BY LEFT</span>
            </div>
            <div className="nav">
                <NavBar />
            </div>
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
                            
                            <div><LocationOnIcon /> {mine.location}</div>
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
                <button className="download" onClick={printDocument}>DOWNLOAD</button>
            </div>
        </div>
    );
};

export default MineInformation;
