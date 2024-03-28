function NavBar() {
    return (
        <header className="home-header">
            <div className="home-link">
                <img src="/src/assets/logo.png" alt="" width="50px"/>
            </div>
            <div className="dashboard-links menu-links">
                <ul className="menu-items">
                    <li>Dashboard</li>
                    <li>Monitor</li>
                    <li>Workflows</li>
                </ul>
            </div>
            <div className="header-buttons">
                <button>
                    <img src="/src/assets/sun.svg" alt="Theme Button" />
                </button>
            </div>
        </header>
    );
}

export default NavBar;
