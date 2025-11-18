import React from 'react';
import Hero from './Hero';
import WhayChoose from './WhayChoose';
import Products from '../Shop/Products';

const Home = () => {
    return (
        <>
           <Hero /> 
           <WhayChoose />
           <Products headline="Best Selling Product"/>
        </>
    );
};

export default Home;