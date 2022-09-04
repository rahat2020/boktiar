import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    // console.log(user)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-custom">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5" to="/">
                    {user ? user.name : "Rahat"}
                </Link>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-toggler-icon-custom"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active me-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-4" to="/aboutme">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-4" to="/allProjects">All Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-4" to="/contactme">Contact</Link>
                        </li>
                        {
                            user ?
                                <li className="nav-item">
                                    <Link className="nav-link me-4" to="/dashboard">Dashboard</Link>
                                </li>
                                :
                                " "
                        }

                        <li className="nav-item">
                            {
                                user ?
                                    <button className="nav-link me-4 btn__logout" onClick={handleLogout}>Logout</button>
                                    :
                                    <Link className="nav-link me-4" to="/login">Login</Link>

                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;