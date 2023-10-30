import React from "react";
import "../styles/NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="/">OVERVIEW</a>
                </li>
                <li className="navbar-item">
                    <a href="/">BUYERS</a>
                </li>
                <li className="navbar-item">
                    <a href="/">PREVIEW</a>
                </li>
                <li className="navbar-item">
                    <a href="/">DOWNLOAD</a>
                </li>
            </ul>
        </nav>
    );
}
