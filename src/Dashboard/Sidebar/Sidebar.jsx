import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../App';
import { AuthContext } from '../../Context/AuthContext';
import userimg from '../../img/proMe.png';
import './Sidebar.css';
import Welcome from './Welcome';

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false)
    const [topen, setTopen] = useState(false)
    const [revpen, setRevpen] = useState(false)
    // const [sopen, setSopen] = useState(false)
    const [suopen] = useState(false)
    const [writePpen, setWritePpen] = useState(false)
    const navigate = useNavigate();
    // const [ user] = useContext(UserContext)

    const { user, dispatch, decodedTkn } = useContext(AuthContext)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
        navigate('/login')
    }


    return (
        // <main id="sidebar" className="spaceToggle">
        <>
            <main id="sidebar" className={show ? 'spaceToggle' : null}>
                <header className={`header  ${show ? 'spaceToggle' : null}`}>
                    {/* <header className="header"> */}
                    <div className="headerToggle" onClick={() => setShow(!show)}>
                        <i className="fa-solid fa-bars-staggered" id="headerIcon"></i>
                    </div>
                    <strong className="text-white">{user ? user.name : "User name"}</strong>
                    <div className="headerImgContainer">
                        <div className="topleft">
                            <i className="fa-solid fa-bell bell "></i>
                            {/* {
                            user.img ?
                            <img src={user.img ? user.img : user} alt="" className="headerImg" />
                            :
                            <img src={user} alt="" className="headerImg" />
                        } */}
                            <img src={userimg} alt="" className="headerImg" />
                            <div className="dropdown">
                                <span type="span" className="dropdown-toggle" data-bs-toggle="dropdown" />
                                <ul className="dropdown-menu">
                                    <li><Link to={`/user/${user._id}`} className="dropdown-item navLink">My Profile</Link></li>
                                    <li><Link to="/dashboard" className="dropdown-item navLink">Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <aside className={`sidebar show ${show ? 'show' : null}`}>
                    {/* <aside className="sidebar show"> */}
                    <nav className="nav">
                        <div>
                            <Link to="/" className="navLogo">
                                <i className="fas fa-home-alt" id="navLogoIcon"></i>
                                <span className="navLogoName">Home</span>
                            </Link>
                            <div className="navList">

                                {
                                    decodedTkn.isAdmin === true ?
                                        <>
                                            {/* ADMIN DASHBOARD */}
                                            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                                                <span className="sidebar-title navLink">
                                                    <span className="">
                                                        <i className="fa-solid fa-chalkboard-user" id="navLinkIcon"></i>
                                                        Dashboard
                                                    </span>
                                                    <i className="fa-solid fa-angle-down toggle-btn" onClick={() => setOpen(!open)}></i>
                                                </span>
                                                <ul className="sidebar-content">
                                                    <li className="sidebar-submenu"><Link to="/admin" id="post-li">Admin dashboard</Link></li>
                                                </ul>
                                            </div>

                                            {/* POSTS */}
                                            <div className={topen ? "sidebar-item open" : "sidebar-item"}>
                                                <span className="sidebar-title navLink">
                                                    <span className="">
                                                        <i className="fa-solid fa-envelopes-bulk" id="navLinkIcon"></i>
                                                        Posts
                                                    </span>
                                                    <i className="fa-solid fa-angle-down toggle-btn" onClick={() => setTopen(!topen)}></i>
                                                </span>
                                                <ul className="sidebar-content">
                                                    <li className="sidebar-submenu"><Link to="/allposts" id="post-li">All Posts</Link></li>
                                                    <li className="sidebar-submenu"><Link to="/dashboard" id="post-li">Single Post</Link></li>
                                                    <li className="sidebar-submenu"><Link to="/addpost" id="post-li">Post add</Link></li>
                                                    <li className="sidebar-submenu"><Link to="/postedit" id="post-li">Post edit</Link></li>
                                                </ul>
                                            </div>

                                            <div className={revpen ? "sidebar-item open" : "sidebar-item"}>
                                                <span className="sidebar-title navLink">
                                                    <span className="">
                                                        <i className="fa-solid fa-envelopes-bulk" id="navLinkIcon"></i>
                                                        Reviews
                                                    </span>
                                                    <i className="fa-solid fa-angle-down toggle-btn" onClick={() => setRevpen(!revpen)}></i>
                                                </span>
                                                <ul className="sidebar-content">
                                                    <li className="sidebar-submenu"><Link to="/mangeReview" id="post-li">Review Mangement</Link></li>
                                                </ul>
                                            </div>

                                            {/* BLOGS */}
                                            {/* <div className={sopen ? "sidebar-item open" : "sidebar-item"}>
                                                <span className="sidebar-title navLink">
                                                    <span className="">
                                                        <i className="fa-solid fa-blog" id="navLinkIcon"></i>
                                                        Blog
                                                    </span>
                                                    <i className="fa-solid fa-angle-down toggle-btn" onClick={() => setSopen(!sopen)}></i>
                                                </span>
                                                <ul className="sidebar-content">
                                                    <li className="sidebar-submenu"><Link to="/studentList" id="post-li">Blogs list</Link></li>
                                                    <li className="sidebar-submenu"><Link to="/studentView" id="post-li">Sinlge Blog</Link></li>
                                                    <li className="sidebar-submenu"><Link to="/studentAdd" id="post-li">Blog add</Link></li>
                                                    <li className="sidebar-submenu"><Link to="/studentEdit" id="post-li">Blog edit</Link></li>
                                                </ul>
                                            </div> */}
                                        </>
                                        :
                                        <>
                                            {/* WRITE REVIEW */}
                                            <div className={writePpen ? "sidebar-item open" : "sidebar-item"}>
                                                <span className="sidebar-title navLink">
                                                    <span className="">
                                                        <i className="fa-solid fa-blog" id="navLinkIcon"></i>
                                                        Review
                                                    </span>
                                                    <i className="fa-solid fa-angle-down toggle-btn" onClick={() => setWritePpen(!writePpen)}></i>
                                                </span>
                                                <ul className="sidebar-content">
                                                    <li className="sidebar-submenu"><Link to="/addreview" id="post-li">Add Review</Link></li>
                                                </ul>
                                            </div>
                                        </>
                                }

                                {/* LOGOUT */}
                                <div className={suopen ? "sidebar-item open" : "sidebar-item"}>
                                    <span className="sidebar-title navLink">
                                        <span onClick={handleLogout} style={{ cursor: "pointer" }}>
                                            <i className="fa-solid fa-right-from-bracket" id="navLinkIcon"></i>
                                            Logout
                                        </span>
                                        {/* <i className="fa-solid fa-angle-down toggle-btn" onClick={() => setSUopen(!suopen)}></i> */}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </nav>
                </aside>

                {/* <div className="content">
                <h2 className="text-center justify-content-center align-items-center welcome">Welcome to the dashboard</h2>
            </div> */}

            </main>
            <div className="d-flex justify-content-start align-items-start mt-5 pt-5" style={{ position: 'absolute', marginLeft: '30rem' }}>
                <Welcome />
            </div>
        </>
    )
}

export default Sidebar