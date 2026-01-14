import React from 'react';
import './About.css';
import { Apple, Heart, Activity } from 'lucide-react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container about__container">
                <div className="about__image">
                    {/* Placeholder for About Image - Using a colored styled block or image */}
                    <div className="about__image-placeholder">
                        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600" alt="Healthy Food" />
                    </div>
                </div>
                <div className="about__content">
                    <h2 className="section-title">Redefining Well-Being</h2>
                    <p className="about__text">
                        We believe that true health is more than just what you eat. It's about how you live, move, and feel.
                        Our holistic approach combines scientific nutrition with mindful lifestyle changes to help you achieve sustainable results.
                    </p>
                    <p className="about__text">
                        Whether you're looking to manage weight, boost energy, or address specific health concerns,
                        our expert dieticians are here to guide you every step of the way.
                    </p>

                    <div className="about__features">
                        <div className="feature">
                            <div className="feature__icon"><Apple /></div>
                            <h3>Personalized Plans</h3>
                        </div>
                        <div className="feature">
                            <div className="feature__icon"><Heart /></div>
                            <h3>Ongoing Support</h3>
                        </div>
                        <div className="feature">
                            <div className="feature__icon"><Activity /></div>
                            <h3>Holistic Focus</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
