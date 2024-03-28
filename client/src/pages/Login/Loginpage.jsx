function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-image-container">
                <img
                    className="login-image"
                    src="/src/assets/login-image.png"
                    alt="Login Illustration"
                />
            </div>
            <div className="forms-wrapper">
                <div className="project-logo">
                    <img src="/src/assets/logo.png" alt="" />
                    <p>SmartGrid</p>
                </div>
                <div className="login-form">
                    <h2>Log In</h2>
                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" />
                    <p>Password</p>
                    <input type="password" placeholder="●●●●●●●●●●●●●" />
                    <p className="signup-link-text">
                        Don&apos;t have an account? <a href="/signup">Create one!</a>
                    </p>
                </div>
                <div className="forms-submit-button">
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
