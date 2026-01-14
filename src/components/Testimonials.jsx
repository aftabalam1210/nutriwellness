import React from 'react';
import './Testimonials.css';
import { Quote } from 'lucide-react';
import { testimonials } from '../data'; // Import from central data

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">

                <div className="section-header text-center">
                    <h2 className="section-title center">Happy Clients</h2>
                    <p className="testimonials-subtitle">Real stories from real people who transformed their lives.</p>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((t) => (
                        <div key={t.id} className="testimonial-card">
                            <Quote className="quote-icon" size={40} />
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <img src={t.image} alt={t.name} onError={(e) => e.target.src = 'https://placehold.co/100x100?text=User'} />
                                <div>
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
