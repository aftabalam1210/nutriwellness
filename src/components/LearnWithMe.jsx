import React, { useState } from 'react';
import './LearnWithMe.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const LearnWithMe = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const learnItems = [
        { name: 'Recipe', link: '#recipes' },
        { name: 'Articles', link: '#articles' }
    ];

    return (
        <section className="learn-section" id="learn">
            <div className="container learn-container">
                <div className="learn-accordion">
                    <button className="learn-header" onClick={toggleAccordion}>
                        <h2>Learn with me</h2>
                        {isOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                    </button>
                    
                    <div className={`learn-content ${isOpen ? 'open' : ''}`}>
                        <ul className="learn-list">
                            {learnItems.map((item, index) => (
                                <li key={index} className="learn-item">
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnWithMe;
