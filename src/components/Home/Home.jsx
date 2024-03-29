import React from 'react'
import About from '../About/About'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import ContactBottom from '../ContactBottom/ContactBottom'
import CountAPI from '../CountAPI/CountAPI'
import ExcelProject from '../Excel/ExcelProject/ExcelProject'
// import ExcelProject from '../ExcelProject/ExcelProject'
import Intro from '../Intro/Intro'
import Navbar from '../Navbar/Navbar'
import ProductList from '../ProductList/ProductList'
import Skill from '../Skill/Skill'
import Testimonial from '../Testimonial/Testimonial'
import Toggle from '../Toggle/Toggle';
import Videos from '../Videos/Videos';
import Location from '../Locations'

export default function Home() {

    return (
        <>
            <Toggle />
            <Intro />
            <Navbar />
            <About />
            {/* <Location/> */}
            {/* <CountAPI/> */}
            <Skill />
            <ExcelProject/>
            <ProductList />
            <Videos/>
            <Blogs />
            <Testimonial />
            <Contact />
            <ContactBottom />
        </>
    )
}
