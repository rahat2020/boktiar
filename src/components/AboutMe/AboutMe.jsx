import React from 'react';
import Navbar from '../Navbar/Navbar';
import './AboutMe.css';
import me from '../../img/proMe.png';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";

const AboutMe = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            //  value: "#fff",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Navbar />
            <div className=" mt-5 pt-5 abme">
                <div className="row">
                    <div className="col-md-6">
                        <Tilt>
                            <div className="clleft">
                                <div className="card me-card" style={{ width: '18rem' }}>
                                    <div className="me-img-contanier">
                                        <img src={me} className="me-card-img card-img-top" alt="..." />
                                    </div>
                                    <div className="card-content">
                                        <h5 className="card-title">Kazi Rahat
                                            <span className="rght-mark">
                                            <i className="fa-solid fa-certificate mark"></i>
                                            </span>
                                        </h5>
                                        <div className="div"></div>
                                        <p className="card-dev">Front End Developer</p>
                                        <p className="card-job">Seeking a job opportunity 😞</p>
                                    </div>
                                    <div className="card-bottom">
                                        <div className="card-media">
                                            <Link to="/https://twitter.com/KaziRahat2020" className="card-media-link"><i className="fa-brands fa-twitter me-icon"></i></Link>
                                            <Link to="/https://www.linkedin.com/in/kazi-rahat2020/" className="card-media-link"><i className="fa-brands fa-linkedin me-icon"></i></Link>
                                            <Link to="/https://www.instagram.com/kazirahat1020/" className="card-media-link"><i className="fa-brands fa-instagram me-icon"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div className="col-md-6">
                        <div className="clrgt">
                            <div className="clrgt-container">
                                <h1 className="clrgt-title">Hello there 😃</h1>
                                <p className="clrgt-para"> I’m a Front-End developer and a tech enthusiast person & loves to do coding. As a developer, I love to take on challenges and am always curious to solve challenges and problems. I like to introduce myself to the latest tools and technologies and my hobby is keeping myself updated with all the latest tools and technologies.</p>
                                <p className="clrgt-para">I've learned React js and Front end development and did a free internship from my academy Programming Hero. The internships durations was two months. Where I've worked on project and my role was team leader but I worked both sides as well as front and backend and the team were five members only. And also,I've done so many freelance projects for my clients and for me also</p>
                                {/* <p className="clrgt-para"></p> */}
                                <div className="clrgt-btn-container">
                                    <a href="https://drive.google.com/file/d/1x-aj9axn3_TNLV2Ytc2lW06U_5dUNBMH/view" target="_blank" rel="noreferrer">
                                        <button className="btn-resume">Resume</button>
                                    </a>
                                    <Link to="/allProjects">
                                        <button className="btn-projects ms-4">Projects</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe