import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/NavBar.css";
import logo from "../assets/logo.png";

function NavBar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [company, setCompany] = useState({
        // logo: "",
        name: "Opal",
        fullName: "Opal Oasis",
        data: "01",
    });

    return (
        <div className="header">
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
            <div className="navbar">
                <Link
                    to="/overview"
                    className={isActive("/overview") ? "active" : ""}
                >
                    OVERVIEW
                </Link>
                <span>/</span>
                <Link to="/" className={isActive("/") ? "active" : ""}>
                    BUYERS
                </Link>
                <span>/</span>
                <Link
                    to="/preview"
                    className={isActive("/preview") ? "active" : ""}
                >
                    PREVIEW
                </Link>
                <span>/</span>
                <Link
                    to="/download"
                    className={isActive("/download") ? "active" : ""}
                >
                    DOWNLOAD
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
