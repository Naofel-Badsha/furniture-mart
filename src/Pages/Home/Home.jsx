import React from 'react';
import Hero from './Hero';
import WhayChoose from './WhayChoose';
import Products from '../Shop/Products';
import Expriences from './Expriences';
import Materials from './Materials';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
           <Hero /> 
           <WhayChoose />
           <Products headline="Best Selling Product"/>
           <Expriences />
           <Materials />
           <Testimonial />
        </>
    );
};

export default Home;