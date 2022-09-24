import React from 'react';
import './Product.css';

export default function Product({photo, link}) {
    // const pic = " https://boktiar.herokuapp.com/images/";
    return (
        <div data-aos="fade-up" className="p mb-5  pl__shadows">
            <p className="p-browser">
                <span className="p-circle"></span>
                <span className="p-circle"></span>
                <span className="p-circle"></span>
            </p>

            <a href={link} target="_blank" rel="noreferrer">
                <img src={photo} alt="" className="p-img" />
            </a>
        </div>
    )
}
