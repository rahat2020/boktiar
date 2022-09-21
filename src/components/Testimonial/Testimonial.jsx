import React, { useEffect, useState } from 'react';
import './Testimonial.css'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Testimonial = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    // fetching data from database
    const pic = " https://boktiar.herokuapp.com/images/";

    const [rev, setRev] = useState([])
    // console.log(rev)
    useEffect(() => {
        const getReview = async () => {
            const review = await axios.get(' https://boktiar.herokuapp.com/review/getallreview')
            setRev(review.data)
        }
        getReview()
    }, [])
    return (
        <div className="mb-5 testimonial">

            <div className="testTitle">
                <div className="lineTitle"></div>
                <h2 className="text-center fs-2 fw-bold">Testimonial</h2>
            </div>

            <AutoplaySlider play={true}
            className="testi__color"
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}>
            
                {
                    rev.map(item => (
                        <div className="review"  key={item._id}>
                            <div className="reviewContainer">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={pic + item.photo} alt="" className="avatar" />
                                </div>
                                <div className="reviewTitle">
                                    <h4 className="author-title">{item.name}</h4>
                                    <span className="reviewRank">{item.rank}</span>
                                </div>
                                <p className="reviewPara">{item.descriptions}</p>
                                <div className="socialIcon">
                                    <a href={item.facebook} target="_blank" rel="noreferrer" className="box facebook">
                                        <FontAwesomeIcon className="media" icon={faFacebookF} />
                                    </a>
                                    <a href={item.linkedin} target="_blank" className="box linkedIn" rel="noreferrer">
                                        <FontAwesomeIcon className="media" icon={faLinkedinIn} />
                                    </a>
                                    <a href={item.instagram} target="_blank" rel="noreferrer" className="box instagram">
                                        <FontAwesomeIcon className="media" icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </AutoplaySlider>
        </div>
    )
}

export default Testimonial