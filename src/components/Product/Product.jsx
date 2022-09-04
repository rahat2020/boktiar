import React from 'react';
import './Product.css';

export default function Product({photo, link}) {
    const pic = "https://boktiar.herokuapp.com/images/";
    return (
        <div data-aos="fade-up" className="p mb-5">
            <p className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </p>

            <a href={link} target="_blank" rel="noreferrer">
                <img src={pic+ photo} alt="" className="p-img" />
            </a>
        </div>
    )
}
