import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className="dashboard-header">
            <Link className="home-link" to="/dashboard">
                <img src="/src/assets/logo.png" alt="" width="40px"/><p> SmartGrid</p>
            </Link>
            <div className="dashboard-links">
                <ul className="menu-items">
                    <li><img src="/src/assets/dashboard-icon.svg" alt="" /> Dashboard</li>
                    <li><img src="/src/assets/monitor.svg" alt="" /> Monitor</li>
                    <li><img src="/src/assets/workflow.svg" alt="" /> Workflows</li>
                    <li><img src="/src/assets/settings.svg" alt="" /> Settings</li>
                </ul>
            </div>
            <div className="dashboard-header-buttons">
                <button className="dashboard-notification">
                    <img src="/src/assets/bell.svg" alt="" />
                </button>
                <button>
                    <img src="/src/assets/sun.svg" alt="Theme Button" />
                </button>
            </div>
        </header>
    );
}

export default NavBar;
