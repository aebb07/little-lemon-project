import React from 'react';
import CallToAction from './CallToAction';
import Menu from './Menu';
import Testimonials from './Testimonials';
import About from './About';

const Main = () => {

        return (
        <div>
            <CallToAction />
            <Menu />
            <Testimonials />
        <section id="about-section">
            <About />
        </section>
        </div>

        )
}

export default Main;