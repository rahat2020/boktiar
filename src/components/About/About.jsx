import React, { useEffect } from 'react';
import './About.css';
// import award from '../../img/award.png';
import proMe from '../../img/proMe.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    return (
        <>
            <div className="a">
                <div className="a-left">
                    <div data-aos="fade-down" className="a-card bg">  </div>
                    <div data-aos="fade-up" className="a-card">
                        <img
                            src={proMe}
                            alt=""
                            className="a-img"
                        />
                    </div>

                </div>
                <div data-aos="fade-up" className="a-right">
                    <h1 className="a-title">About me</h1>
                    <p className="a-sub">
                        Hello there, I am a Front-end Developer and tech enthusiast person.
                    </p>
                    <p className="a-desc">
                        I created lots of successful websites that are fast, easy to use, and built with best practices. I used HTML, CSS, and React js and JavaScript and also backend language(node js, mongodb, express js) to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser.
                    </p>
                    <h4 className="fw-bold">Job Status:</h4>
                    <h5 className="fw-bold">I'm currently open for work and can join immediately.</h5>
                    <div className="a-award">
                    </div>
                </div>
            </div>
        </>
    )
}
