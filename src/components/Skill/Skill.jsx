import React from 'react';
import './Skill.css';

export default function Skill() {
    return (
        <div>
            <section className="container">

                <h2 className="text-center skill-title">❏ Here is my skill ❏</h2>
                {/* <here></here> */}
                <div className="row mt-5 mb-5">
                    <div data-aos="fade-up" className="col-md-6 col-left">
                        <div className="skill-bars">
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">React JS</span>
                                </div>
                                <div className="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">HTML5 and CSS</span>
                                </div>
                                <div className="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">Bootstrap and React Bootstrap</span>
                                </div>
                                <div className="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">MongoDB</span>
                                </div>
                                <div className="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">Node JS</span>
                                </div>
                                <div className="progress-line css">
                                    <span></span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-right">
                        <div data-aos="fade-up" className="skill-bars">
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">React Native</span>
                                </div>
                                <div className="progress-line native">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">Redux</span>
                                </div>
                                <div className="progress-line redux">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">Material UI</span>
                                </div>
                                <div className="progress-line mu">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">JavaScript</span>
                                </div>
                                <div className="progress-line javascript">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="info">
                                    <span className="skill__title">Express JS</span>
                                </div>
                                <div className="progress-line express">
                                    <span></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
