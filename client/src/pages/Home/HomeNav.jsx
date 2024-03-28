function HomeNav() {
    return (
        <header className="home-header">
            <div className="home-link">
                <a href="/">Home</a>
            </div>
            <div className="menu-links">
                <ul className="menu-items">
                    <li>
                        <a href="/get_started">Get Started</a>
                    </li>
                    <li>
                        <a href="/features">Key Features</a>
                    </li>
                    <li>
                        <a href="/about_us">About Us</a>
                    </li>
                </ul>
            </div>
            <div className="header-buttons">
                <button>
                    <a href="/login">Log In</a>
                </button>
                <button>
                    <img src="/src/assets/sun.svg" alt="Theme Button" />
                </button>
            </div>
        </header>
    );
}

export default HomeNav;
