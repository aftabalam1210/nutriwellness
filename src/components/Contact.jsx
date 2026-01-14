import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container contact__container">

                <div className="contact__info">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact__desc">
                        Ready to start your journey? Have questions? We're here to help you achieve your health goals.
                    </p>

                    <div className="contact__details">
                        <div className="contact__item">
                            <div className="icon-box"><Phone size={20} /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="contact__item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <div>
                                <h3>Email</h3>
                                <p>hello@nutriwellness.com</p>
                            </div>
                        </div>
                        <div className="contact__item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <div>
                                <h3>Clinic</h3>
                                <p>123 Wellness Ave, Healthy City, HC 10001</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="contact__form">
                    <h3 className="form-title">Send a Message</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="How can we help you?" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Send Message <Send size={16} style={{ marginLeft: '8px' }} />
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Contact;
