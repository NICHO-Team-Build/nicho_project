import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="navbar">
            <Link to="/overview" className={isActive('/overview') ? 'active' : ''}>OVERVIEW</Link>
            <span>/</span>
            <Link to="/" className={isActive('/') ? 'active' : ''}>BUYERS</Link>
            <span>/</span>
            <Link to="/preview" className={isActive('/preview') ? 'active' : ''}>PREVIEW</Link>
            <span>/</span>
            <Link to="/download" className={isActive('/download') ? 'active' : ''}>DOWNLOAD</Link>
        </div>
    );
}

export default NavBar;
