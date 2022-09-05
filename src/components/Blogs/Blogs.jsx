import React from 'react'
import './Blogs.css';
import prome from '../../img/proMe.png';

const Blogs = () => {
    return (
        <section className="mt-4 pt-4 mb-4 pb-4 container">
            <div className="line">
                <div className="line-container">
                    <h2 className="text-center fs-2 fw-bold blog__title">Blogs</h2>
                    <div className="lines"></div>
                </div>
            </div>

            <div data-aos="fade-up" className="row">
                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">8 May 2021</span>
                                <h5 className="card-title">JavaScript core functionalities part-02</h5>
                                <p className="card-text">In JavaScript, truthy are expressions which evaluates href boolean true value and falsy evaluates href boolean false value.</p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://kazirahat2020.medium.com/javascript-core-functionalities-part-02-de3ae2ba8894" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">8 May 2021</span>
                                <h5 className="card-title">JavaScript core functionalities</h5>
                                <p className="card-text">Cross browser testing is non functional testing method where you should check your created website, web apps, pages working properly in different browser properly</p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://kazirahat2020.medium.com/javascript-core-functionalities-525a8bca6571" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">6 May 2021</span>
                                <h5 className="card-title">JavaScript core functionalities</h5>
                                <p className="card-text">Cross browser testing is non functional testing method where you should check your created website, web apps, pages working properly in different browser properly</p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://kazirahat2020.medium.com/javascript-core-functionalities-525a8bca6571" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card four */}
                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">5 May 2021</span>
                                <h5 className="card-title">Understanding JavaScript basic functionalities</h5>
                                <p className="card-text">String is like a Wearhouse where you can shrefre lots of different types of data or text and number also. But it is used href represent text rather than numbers. </p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://kazirahat2020.medium.com/understanding-javascript-basic-functionalities-a1f7db729f61" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card five */}
                <div className="col-md-4">
                    <div className="p-4">
                        <div className="card-container">
                            <div className="imgContainer">
                                <img src={prome} className="blogImg" alt="..." />
                            </div>
                            <div className="body-container">
                                <span className="date">7 May 2021</span>
                                <h5 className="card-title">React basic core concept part-1</h5>
                                <p className="card-text">React Js is a JavaScript library where users can create UI components. It’s not a framework. Frameworks serve a great purpose, especially for young teams and startups</p>
                                <div className="b-container">
                                    <a target="_blank" rel="noreferrer" href="https://kazirahat2020.medium.com/react-basic-core-concept-part-1-b5fefefc2452" className="b-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Blogs