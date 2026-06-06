import React from 'react';
import './About.css';
import { Apple, Heart, Activity } from 'lucide-react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title center">About the Consultation Program</h2>
                </div>
                <div className="about__container">
                    <div className="about__image">
                        <div className="about__image-placeholder">
                            <img src="/assets/profile.jpeg" alt="Profile" />
                        </div>
                    </div>

                    <div className="about__content">
                        <p className="about__text">
                            Our consultations go beyond calorie counting. We do not believe in quick-fix weight loss methods.
                            Instead, we focus on helping you understand your overall lifestyle. We look at your eating habits,
                            daily routine, physical activity, sleep patterns, and work schedule to better understand your current health.
                        </p>
                        <p className="about__text">
                            Our goal is to help you build awareness about your body and take control of the choices you make
                            around what you eat and how you move, so you can develop sustainable habits that last well beyond the program.
                        </p>

                        <div className="about__features">
                            <div className="feature">
                                <div className="feature__icon"><Apple /></div>
                                <h3>Sustainable Habits</h3>
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
            </div>
        </section>
    );
};

export default About;
