import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import './ProductList.css';
// import { products } from '../../data';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [pd, setPd] = useState([])
    // console.log(pd)
    useEffect(() => {
        const url = ` https://boktiar.herokuapp.com/post/getPost`;
        fetch(url)
            .then(response => response.json())
            .then(data => setPd(data));
    }, [])

    // DATA FETCH LOADER
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoad(false);
        }, [3000])
        return () => clearTimeout(timeout);
    })
    return (
        <div className="pl">
            <div data-aos="fade-up" className="pl-texts">
                <h1 className="pl-title">
                    Create & inspire. It is Rahat
                </h1>
                <p className="pl-desc">
                    Rahat is a creative Developer and Designer that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div data-aos="fade-up" className="d-flex justify-content-center align-content-center">
                <Link to="/allProjects">
                    <button className="i-btn">View All</button>
                </Link>
            </div>
            <div className="pl-list">
                {
                    load ?
                        <h3>Loading...</h3>
                        :
                        <>
                            {
                                pd.map(item => (<Product key={item._id} photo={item.photo} link={item.link} />))
                            }
                        </>
                }


            </div>
        </div>
    )
}
