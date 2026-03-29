import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown } from 'lucide-react';

const Contact = () => {
    const [concernState, setConcernState] = useState({
        isOpen: false,
        selected: ''
    });
    const [genderState, setGenderState] = useState({
        isOpen: false,
        selected: ''
    });
    const [planState, setPlanState] = useState({
        isOpen: false,
        selected: ''
    });
    
    const concernDropdownRef = useRef(null);
    const genderDropdownRef = useRef(null);
    const planDropdownRef = useRef(null);

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

    const genders = [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
        { value: 'other', label: 'Other / Prefer not to say' }
    ];

    const plans = [
        { value: 'one-time', label: 'One-time Consultation (₹600)' },
        { value: '1-month', label: '1 Month Program (₹3,000)' },
        { value: '3-months', label: '3 Months Program (₹9,000)' },
        { value: '6-months', label: '6 Months Program (₹18,000)' },
        { value: 'undecided', label: 'General / Undecided' }
    ];

    useEffect(() => {
        // Handle dropdown outside clicks
        const handleClickOutside = (event) => {
            if (concernDropdownRef.current && !concernDropdownRef.current.contains(event.target)) {
                setConcernState(prev => ({ ...prev, isOpen: false }));
            }
            if (genderDropdownRef.current && !genderDropdownRef.current.contains(event.target)) {
                setGenderState(prev => ({ ...prev, isOpen: false }));
            }
            if (planDropdownRef.current && !planDropdownRef.current.contains(event.target)) {
                setPlanState(prev => ({ ...prev, isOpen: false }));
            }
        };

        // Handle external event from Pricing page
        const handlePlanSelected = (event) => {
            setPlanState({ isOpen: false, selected: event.detail });
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('planSelected', handlePlanSelected);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('planSelected', handlePlanSelected);
        };
    }, []);

    const handleConcernToggle = () => {
        setConcernState(prev => ({ ...prev, isOpen: !prev.isOpen }));
        setGenderState(prev => ({ ...prev, isOpen: false }));
        setPlanState(prev => ({ ...prev, isOpen: false }));
    };

    const handleConcernSelect = (value, e) => {
        e.stopPropagation();
        setConcernState({ selected: value, isOpen: false });
    };

    const getSelectedLabel = () => {
        const concern = concerns.find(c => c.value === concernState.selected);
        return concern ? concern.label : 'Select Primary Concern';
    };

    const handleGenderToggle = () => {
        setGenderState(prev => ({ ...prev, isOpen: !prev.isOpen }));
        setConcernState(prev => ({ ...prev, isOpen: false }));
        setPlanState(prev => ({ ...prev, isOpen: false }));
    };

    const handleGenderSelect = (value, e) => {
        e.stopPropagation();
        setGenderState({ selected: value, isOpen: false });
    };

    const getSelectedGenderLabel = () => {
        const gender = genders.find(g => g.value === genderState.selected);
        return gender ? gender.label : 'Select Gender';
    };

    const handlePlanToggle = () => {
        setPlanState(prev => ({ ...prev, isOpen: !prev.isOpen }));
        setConcernState(prev => ({ ...prev, isOpen: false }));
        setGenderState(prev => ({ ...prev, isOpen: false }));
    };

    const handlePlanSelect = (value, e) => {
        e.stopPropagation();
        setPlanState({ selected: value, isOpen: false });
    };

    const getSelectedPlanLabel = () => {
        const plan = plans.find(p => p.value === planState.selected);
        return plan ? plan.label : 'Select Program / Plan';
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
                        <input type="hidden" name="gender" value={genderState.selected} />
                        
                        <div className="custom-dropdown" ref={genderDropdownRef}>
                            <div 
                                className={`custom-dropdown-header ${genderState.isOpen ? 'open' : ''}`}
                                onClick={handleGenderToggle}
                            >
                                <span style={{ color: genderState.selected ? 'var(--color-text)' : '#999' }}>
                                    {getSelectedGenderLabel()}
                                </span>
                                <ChevronDown size={20} className="dropdown-icon" />
                            </div>
                            
                            <div className={`custom-dropdown-list ${genderState.isOpen ? 'open' : ''}`}>
                                {genders.map(gender => (
                                    <div 
                                        key={gender.value}
                                        className={`custom-dropdown-pill ${genderState.selected === gender.value ? 'selected' : ''}`}
                                        onClick={(e) => handleGenderSelect(gender.value, e)}
                                    >
                                        {gender.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Interested Plan</label>
                        <input type="hidden" name="interested_plan" value={planState.selected} />
                        
                        <div className="custom-dropdown" ref={planDropdownRef}>
                            <div 
                                className={`custom-dropdown-header ${planState.isOpen ? 'open' : ''}`}
                                onClick={handlePlanToggle}
                            >
                                <span style={{ color: planState.selected ? 'var(--color-text)' : '#999' }}>
                                    {getSelectedPlanLabel()}
                                </span>
                                <ChevronDown size={20} className="dropdown-icon" />
                            </div>
                            
                            <div className={`custom-dropdown-list ${planState.isOpen ? 'open' : ''}`}>
                                {plans.map(plan => (
                                    <div 
                                        key={plan.value}
                                        className={`custom-dropdown-pill ${planState.selected === plan.value ? 'selected' : ''}`}
                                        onClick={(e) => handlePlanSelect(plan.value, e)}
                                    >
                                        {plan.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Choose your primary concern</label>
                        <input type="hidden" name="primary_concern" value={concernState.selected} />
                        
                        <div className="custom-dropdown" ref={concernDropdownRef}>
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
