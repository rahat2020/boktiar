import React, { useEffect, useState } from 'react';
import './Videos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import "swiper/css/navigation";
import 'swiper/css';
import ReactPlayer from 'react-player'
import axios from 'axios';


const Videos = () => {
    const [vid, setVid] = useState([])
    // console.log(vid)
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(' https://boktiar.herokuapp.com/post/getPost')
            setVid(res.data)
        }
        getPost()
    }, [])

    // FETCH LOADER
    const [load, setLoad] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false)
        }, [3000])
        return () => clearTimeout(timer)
    })

    return (
        <>
            <div className="line">
                <div className="line-container">
                    <h3 className="text-center fs-2 fw-bold">Videos</h3>
                    <div className="lines"></div>
                </div>
            </div>
            <div className="services container mt-5  pt-4">

                {
                    load ? <h3 className="text-start">Loading...</h3>
                        :
                        <>
                            <Swiper
                                modules={[Navigation, Thumbs]}
                                loop={true}
                                spaceBetween={15}
                                navigation={true}
                                grabCursor={true}
                                className="swiper-slide"
                                breakpoints={{ 
                                    0:{
                                      slidesPerView:1,
                                      spaceBetween:10
                                    },
                                    468:{ 
                                      slidesPerView:1,
                                      spaceBetween:10
                                    },
                                    768:{ 
                                      slidesPerView:2,
                                      spaceBetween:10
                                    },
                                   }}

                            >

                                {
                                    vid.map(item => (
                                        <SwiperSlide className="swiper one" key={item._id}>
                                            <ReactPlayer url={item.youtube} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </>
                }

            </div>
        </>
    )
}

export default Videos