import React from 'react';
import './HowItWorks.css';

const stages = [
    {
        num: "01",
        title: "Initial Assessment",
        lines: [
            "We begin with a short form where you share your basic details such as age, height, weight, and gender.",
            "You can upload any recent blood reports if available to help us get a quick overview of your current health.",
            "If you face any difficulty, you can share them via WhatsApp."
        ]
    },
    {
        num: "02",
        title: "The Consultation & Plan",
        lines: [
            "Start off with an hour-long first meeting to discuss your routine, eating patterns, sleep, and physical activity via our 'Lifestyle Snapshot'.",
            "Receive a practical meal plan for the first week focused on simple changes without feeling overwhelmed.",
            "In week two, we build on this foundation with a more structured, personalised plan designed to support your long-term goals."
        ]
    },
    {
        num: "03",
        title: "Ongoing Support",
        lines: [
            "Weekly interactions to review and alter your meal and exercise plans as you progress.",
            "Phone, WhatsApp, and email support available throughout the program for all of your queries.",
            "We ensure you stay motivated and on track towards forming sustainable habits."
        ]
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <div className="how-it-works__header text-center mb-2">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">Our curated program is designed as a simple 3-stage process.</p>
                </div>
                
                <div className="stages-grid">
                    {stages.map((stage, index) => (
                        <div key={index} className="stage-card">
                            <div className="stage-number">Stage {stage.num}</div>
                            <h3 className="stage-title">{stage.title}</h3>
                            <ul className="stage-list">
                                {stage.lines.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
