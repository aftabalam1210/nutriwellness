import React, { useState } from 'react';
import './Testimonials.css';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data'; 

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = testimonials.length - 1;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? maxIndex : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === maxIndex ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">

                <div className="section-header text-center">
                    <h2 className="section-title center">Happy Clients</h2>
                    <p className="testimonials-subtitle">Real stories from real people who transformed their lives.</p>
                </div>

                <div className="testimonials-slider-container">
                    <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Testimonial">
                        <ChevronLeft size={28} />
                    </button>
                    
                    <div className="testimonials-slider">
                        <div 
                            className="testimonials-track"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="testimonial-slide">
                                    <div className="testimonial-card horizontal">
                                        <div className="testimonial-author-col">
                                            <img src={t.image} alt={t.name} onError={(e) => e.target.src = 'https://placehold.co/100x100?text=User'} />
                                            <div className="author-info">
                                                <h4>{t.name}</h4>
                                                <span>{t.role}</span>
                                            </div>
                                            <Quote className="quote-icon-sidebar" size={40} />
                                        </div>
                                        <div className="testimonial-content-col">
                                            <p className="testimonial-text">"{t.text}"</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="slider-arrow next" onClick={handleNext} aria-label="Next Testimonial">
                        <ChevronRight size={28} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
