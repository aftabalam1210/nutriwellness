import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './HeroCarousel.css';

const slides = [
    {
        id: 1,
        tag: "Holistic Health", // Swipe 1
        title: "Your Partner in Holistic Nutrition & Health",
        subtitle: "Personalized nutrition and lifestyle guidance designed to support balance, vitality, and long-term health.",
        cta: "Book a Consultation",
        image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=1000" // citrus/fruit
    },
    {
        id: 2,
        tag: "Well-Being", // Swipe 2
        title: "Redefining Well-Being, One Habit at a Time",
        subtitle: "Thoughtfully designed nutrition strategies designed around your lifestyle with continuous guidance and 24/7 support.",
        cta: "View Plans",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1000" // food flatlay
    },
    {
        id: 3,
        tag: "Knowledge Hub", // Swipe 3
        title: "Knowledge Hub",
        subtitle: "Curated nutrition insights to help you understand food, health, and mindful living.",
        cta: "Learn to Eat Better",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000" // salad bowl
    },
    {
        id: 4,
        tag: "Healthy Recipes", // Swipe 4
        title: "Healthy tasty recipes",
        subtitle: "Explore our collection of nutritious and delicious recipes crafted for your well-being.",
        cta: "Explore Recipes",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000" // healthy bowl
    },
    {
        id: 5,
        tag: "Take Action", // Swipe 5
        title: "Rethink the Way You Eat, Move & Live",
        subtitle: "Start building healthier habits that support long-term wellness — one step at a time.",
        cta: "Start Today",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1000" // active lifestyle / healthy food
    },
    {
        id: 6,
        tag: "Knowledge Hub", // Swipe 6
        title: "Informed Choices Begin Here",
        subtitle: "Curated nutrition insights to help you understand food, health, and mindful living.",
        cta: "Read the Articles",
        image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=1000" // reading / healthy workspace
    }
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 7000); // Delayed to 7s for better reading time
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero-carousel" id="home">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    className="hero-carousel__slide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Text Content */}
                    <div className="hero-content-wrapper">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="hero-tag"
                        >
                            {slides[current].tag}
                        </motion.span>

                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="hero-title"
                        >
                            {slides[current].title}
                        </motion.h1>

                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="hero-subtitle"
                        >
                            {slides[current].subtitle}
                        </motion.p>

                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="btn btn-primary"
                        >
                            {slides[current].cta}
                        </motion.button>
                    </div>

                    {/* Image Content */}
                    <div className="hero-image-wrapper">
                        <motion.img
                            src={slides[current].image}
                            alt="Hero"
                            className="hero-img"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "linear" }}
                        />
                    </div>

                </motion.div>
            </AnimatePresence>

            <div className="carousel-controls">
                <button className="control-btn" onClick={prevSlide}><ArrowLeft size={20} /></button>
                <button className="control-btn" onClick={nextSlide}><ArrowRight size={20} /></button>
            </div>

        </div>
    );
};

export default HeroCarousel;
