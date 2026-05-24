import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Recipes from '../components/Recipes';
import BMICalculator from '../components/BMICalculator';
import TDEECalculator from '../components/TDEECalculator';
import Testimonials from '../components/Testimonials';
import CasesSolved from '../components/CasesSolved';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <section id="home"><HeroCarousel /></section>
            <section id="about"><About /></section>
            <section id="how-it-works"><HowItWorks /></section>
            <section id="pricing"><Pricing /></section>
            <section id="recipes"><Recipes /></section>
            <section id="bmi"><BMICalculator /></section>
            <section id="tdee"><TDEECalculator /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="cases-solved"><CasesSolved /></section>
            <section id="articles"><Blog /></section>
            <section id="contact"><Contact /></section>
        </>
    );
};

export default Home;
