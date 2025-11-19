import React from 'react';
import Hero from './Hero';
import WhayChoose from './WhayChoose';
import Products from '../Shop/Products';
import Expriences from './Expriences';

const Home = () => {
    return (
        <>
           <Hero /> 
           <WhayChoose />
           <Products headline="Best Selling Product"/>
           <Expriences />
        </>
    );
};

export default Home;