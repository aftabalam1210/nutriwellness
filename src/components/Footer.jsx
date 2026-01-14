import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">

                <div className="footer__brand">
                    <div className="footer__logo">
                        <Heart fill="var(--color-primary)" color="var(--color-primary)" />
                        <span>NutriWellness</span>
                    </div>
                    <p>Empowering you to live a healthier, happier life through personalized nutrition.</p>
                </div>

                <div className="footer__links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#recipes">Recipes</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer__social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                    </div>
                </div>

            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} NutriWellness. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
