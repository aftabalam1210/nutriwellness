import React, { useState, useEffect } from 'react';
import './Pricing.css';
import { Check } from 'lucide-react';
import PaymentModal from './PaymentModal';

const plans = [
    {
        name: "Basic Plan",
        desc: "Up to 50% off on Yearly Plan",
        price: "$49",
        features: [
            "Personalized nutrition plan tailored to your goals.",
            "Access to our mobile app for convenient tracking.",
            "Email support to address your questions.",
            "Regular check-ins with a dedicated nutritionist."
        ],
        color: "#F4F9E0", // Pale pastel green similar to image
        btnColor: "#CDE57B" // Lime green button
    },
    {
        name: "Premium Plan",
        desc: "Up to 50% off on Yearly Plan",
        price: "$79",
        features: [
            "All the features included in the Basic Plan.",
            "One-on-one video consultations with your nutritionist.",
            "Recipe recommendations and meal planning assistance.",
            "Priority email support for quicker responses.",
            "Educational resources to deepen your understanding."
        ],
        color: "#F7FAEB", // Slightly lighter/warm variant
        btnColor: "#CDE57B"
    },
    {
        name: "Ultimate Plan",
        desc: "Up to 50% off on Yearly Plan",
        price: "$99",
        features: [
            "All the features included in the Plus Plan.",
            "Unlimited access to video consultations.",
            "Advanced progress tracking tools.",
            "Customized meal plans based on daily needs.",
            "Priority email and phone support."
        ],
        color: "#F4F9E0",
        btnColor: "#CDE57B"
    }
];

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [billing, setBilling] = useState('monthly');

    return (
        <section className="pricing" id="pricing">
            <div className="container">

                <div className="pricing-toggle-wrapper">
                    <div className="pricing-toggle">
                        <button
                            className={billing === 'monthly' ? 'active' : ''}
                            onClick={() => setBilling('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={billing === 'yearly' ? 'active' : ''}
                            onClick={() => setBilling('yearly')}
                        >
                            Yearly
                        </button>
                    </div>
                    <p className="save-text">Save 50% on Yearly</p>
                </div>

                <div className="pricing__grid">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="pricing-card"
                            style={{ backgroundColor: plan.color }}
                        >
                            <div className="card-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <p className="plan-desc">{plan.desc}</p>
                            </div>

                            <div className="plan-features-box">
                                <ul>
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-footer">
                                <div className="plan-price">
                                    {plan.price}<span className="period">/month</span>
                                </div>
                                <button
                                    className="btn btn-pricing"
                                    style={{ backgroundColor: plan.btnColor }}
                                    onClick={() => setSelectedPlan(plan)}
                                >
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedPlan && (
                <PaymentModal
                    plan={selectedPlan}
                    onClose={() => setSelectedPlan(null)}
                />
            )}
        </section>
    );
};

export default Pricing;
