import React from 'react'
import About from '../About/About'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import ContactBottom from '../ContactBottom/ContactBottom'
import Intro from '../Intro/Intro'
import Navbar from '../Navbar/Navbar'
import ProductList from '../ProductList/ProductList'
import Skill from '../Skill/Skill'
import Testimonial from '../Testimonial/Testimonial'
import Toggle from '../Toggle/Toggle';
import Videos from '../Videos/Videos';

export default function Home() {

    return (
        <>
            <Toggle />
            <Intro />
            <Navbar />
            <About />
            <Skill />
            <ProductList />
            <Videos/>
            <Blogs />
            <Testimonial />
            <Contact />
            <ContactBottom />
        </>
    )
}
