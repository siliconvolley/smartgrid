import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/Loginpage';
import SignupPage from './pages/Signup/SignupPage';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
        </Router>
    );
}

export default App;