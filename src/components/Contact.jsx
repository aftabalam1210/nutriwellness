import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown } from 'lucide-react';

const Contact = () => {
    const [concernState, setConcernState] = useState({
        isOpen: false,
        selected: ''
    });
    const dropdownRef = useRef(null);

    const concerns = [
        { value: 'weight', label: 'Weight management' },
        { value: 'pcos', label: 'PCOS' },
        { value: 'cholesterol', label: 'Cholesterol Management' },
        { value: 'diabetes', label: 'Diabetes/Pre-Diabetes' },
        { value: 'hypertension', label: 'Hypertension' },
        { value: 'liver', label: 'Liver Health' },
        { value: 'balanced', label: 'Balanced diet' },
        { value: 'other', label: 'Any other?' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setConcernState(prev => ({ ...prev, isOpen: false }));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleConcernToggle = () => {
        setConcernState(prev => ({ ...prev, isOpen: !prev.isOpen }));
    };

    const handleConcernSelect = (value, e) => {
        e.stopPropagation();
        setConcernState({ selected: value, isOpen: false });
    };

    const getSelectedLabel = () => {
        const concern = concerns.find(c => c.value === concernState.selected);
        return concern ? concern.label : 'Select Primary Concern';
    };

    return (
        <section className="contact" id="contact">
            <div className="container contact__container">

                <div className="contact__info">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact__desc">
                        Ready to start your journey? Share your health goals and we’ll respond within 24 hours.
                    </p>

                    <div className="contact__details">
                        <div className="contact__item">
                            <div className="icon-box"><MessageCircle size={20} /></div>
                            <div>
                                <h3>WhatsApp Us</h3>
                                <p>+977 9823355934</p>
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
                    <h3 className="form-title">To Consult</h3>
                    
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input type="text" placeholder="Your City/Country" required />
                        </div>
                    </div>

                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" placeholder="Your Phone Number" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email Address" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select className="aesthetic-select" required>
                            <option value="">Select Gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other / Prefer not to say</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Choose your primary concern</label>
                        {/* Hidden input to ensure form submission includes this data if needed */}
                        <input type="hidden" name="primary_concern" value={concernState.selected} />
                        
                        <div className="custom-dropdown" ref={dropdownRef}>
                            <div 
                                className={`custom-dropdown-header ${concernState.isOpen ? 'open' : ''}`}
                                onClick={handleConcernToggle}
                            >
                                <span style={{ color: concernState.selected ? 'var(--color-text)' : '#999' }}>
                                    {getSelectedLabel()}
                                </span>
                                <ChevronDown size={20} className="dropdown-icon" />
                            </div>
                            
                            <div className={`custom-dropdown-list ${concernState.isOpen ? 'open' : ''}`}>
                                {concerns.map(concern => (
                                    <div 
                                        key={concern.value}
                                        className={`custom-dropdown-pill ${concernState.selected === concern.value ? 'selected' : ''}`}
                                        onClick={(e) => handleConcernSelect(concern.value, e)}
                                    >
                                        {concern.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Can’t choose? Write additional information here</label>
                        <textarea placeholder="Briefly describe your goals or medical history..." rows="4"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                        Submit Details <Send size={16} style={{ marginLeft: '8px' }} />
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Contact;
