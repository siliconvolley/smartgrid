function SignupPage() {
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
                    <h2>Sign Up</h2>
                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" />
                    <p>Password</p>
                    <div className="signup-password-input">
                        <input type="password" placeholder="●●●●●●●●●●●●●" />
                        <img className="signup-password-toggle" src="/src/assets/eye.svg" alt="" />
                    </div>
                    <p className="signup-link-text">
                        Already have an account? <a href="/login">Log In!</a>
                    </p>
                </div>
                <div className="forms-submit-button">
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
