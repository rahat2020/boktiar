import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { products } from '../../data';
import Navbar from '../Navbar/Navbar';
import ProjectsDetails from '../ProjectsDetails/ProjectsDetails';
import './Projects.css';

export default function Projects() {
    const [pd, setPd] = useState([]);
    console.log(pd)
    // useEffect(() => { setPd(products) }, [setPd]);
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(' https://boktiar.herokuapp.com/post/getPost')
            // console.log(res)
            setPd(res.data)
        }
        getPost()
    }, [])
    return (
        <div className="project-container">
            <Navbar/>
            <div className="d-flex justify-content-center align-items-center p-3">

                {/* <Link to="/">
                    <button className="i-btn">Go back</button>
                </Link> */}
            </div>
           
            <div className="container">

                {
                    pd.map(item =>

                        <ProjectsDetails key={item._id} item={item} />

                    )
                }
            </div>
        </div>
    )
}
