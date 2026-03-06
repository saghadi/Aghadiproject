import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Logo from '../components/Logo'
import Exprience from '../components/Exprience'
import Form from '../components/Form'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Logo />
            <Exprience />
            <Form />
            <Testimonial />
        </>
    )
}

export default Home