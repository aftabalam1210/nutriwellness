import React, { useState } from 'react';
import './Pricing.css';
import { Check, Info } from 'lucide-react';

const plans = [
    {
        name: "One-time Consultation",
        appointments: "1 Appointment",
        desc: "40 minutes slot",
        price: {
            INR: "₹600",
            NPR: "रू800"
        },
        features: [
            "A one-on-one session to address specific doubts",
            "Ideal for clearing nutrition myths",
            "Guidance on improving eating patterns",
            "No customised diet plan included"
        ],
        planId: "one-time"
    },
    {
        name: "1 Month Program",
        appointments: "4 Appointments",
        desc: "Weekly follow-ups",
        price: {
            INR: "₹3,000",
            NPR: "रू4,000"
        },
        features: [
            "Weekly appointments for 30 mins (1st is 1 hr)",
            "Personalised structured meal plan",
            "Weekly interactions to review & alter plans",
            "Phone, WhatsApp & email support"
        ],
        planId: "1-month"
    },
    {
        name: "3 Months Program",
        appointments: "12 Appointments",
        desc: "For sustained improvements",
        price: {
            INR: "₹8,000",
            NPR: "रू11,000"
        },
        features: [
            "Weekly appointments for 30 mins (1st is 1 hr)",
            "Personalised structured meal plan",
            "Weekly interactions to review & alter plans",
            "Phone, WhatsApp & email support",
            "Monthly Nutrition Learning Session"
        ],
        planId: "3-months"
    },
    {
        name: "6 Months Program",
        appointments: "24 Appointments",
        desc: "For long-term health outcomes",
        price: {
            INR: "₹16,500",
            NPR: "रू22,500"
        },
        features: [
            "Weekly appointments for 30 mins (1st is 1 hr)",
            "Personalised structured meal plan",
            "Weekly interactions to review & alter plans",
            "Phone, WhatsApp & email support",
            "Monthly Nutrition Learning Session"
        ],
        planId: "6-months"
    }
];

const Pricing = () => {
    const [currency, setCurrency] = useState('INR');

    const handleSelectPlan = (planId) => {
        const event = new CustomEvent('planSelected', { detail: planId });
        window.dispatchEvent(event);

        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="pricing__header text-center">
                    <span className="section-tag">Pricing Plans</span>
                    <h2 className="section-title center">Invest in Your Health</h2>
                    <p className="pricing-subtitle">
                        Choose between a one-time consultation or a structured nutrition & lifestyle management program.
                    </p>

                    <div className="currency-toggle-container">
                        <span className="currency-toggle-label">Select Currency:</span>
                        <div className="currency-toggle-pill">
                            <button
                                type="button"
                                className={`currency-btn ${currency === 'INR' ? 'active' : ''}`}
                                onClick={() => setCurrency('INR')}
                            >
                                🇮🇳 INR (₹)
                            </button>
                            <button
                                type="button"
                                className={`currency-btn ${currency === 'NPR' ? 'active' : ''}`}
                                onClick={() => setCurrency('NPR')}
                            >
                                🇳🇵 NPR (रू)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop/Tablet View - Premium Table Layout */}
                <div className="pricing-desktop-view">
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th>Program</th>
                                <th>Appointments</th>
                                <th>Details</th>
                                <th>Cost</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.map((plan, index) => (
                                <tr key={index} className="pricing-row">
                                    <td className="plan-name-cell">
                                        <h3>{plan.name}</h3>
                                        <p className="plan-desc-sub">{plan.desc}</p>
                                    </td>
                                    <td className="appointments-cell">
                                        <span className="appt-badge">{plan.appointments}</span>
                                    </td>
                                    <td className="details-cell">
                                        <ul className="plan-features-list">
                                            {plan.features.map((feature, i) => (
                                                <li key={i}>
                                                    <Check size={14} className="feature-check" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="cost-cell">
                                        <span className="price-val">{plan.price[currency]}</span>
                                    </td>
                                    <td className="action-cell">
                                        <button
                                            className="btn btn-pricing-action"
                                            onClick={() => handleSelectPlan(plan.planId)}
                                        >
                                            Sign Up
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View - Cards Layout */}
                <div className="pricing-mobile-view">
                    <div className="pricing-cards-stack">
                        {plans.map((plan, index) => (
                            <div key={index} className="pricing-mobile-card">
                                <div className="card-mobile-header">
                                    <h3>{plan.name}</h3>
                                    <span className="card-mobile-appts">{plan.appointments}</span>
                                </div>
                                <p className="card-mobile-desc">{plan.desc}</p>

                                <ul className="card-mobile-features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>
                                            <Check size={14} className="feature-check" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="card-mobile-footer">
                                    <span className="card-mobile-price">{plan.price[currency]}</span>
                                    <button
                                        className="btn btn-pricing-action"
                                        onClick={() => handleSelectPlan(plan.planId)}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Important Notes Section */}
                <div className="pricing-notes">
                    <h3>
                        <Info size={22} className="info-icon" /> Important Details
                    </h3>
                    <ol>
                        <li>If you do not have recent blood reports, you can get basic tests done prior to the consultation. If you're unsure which ones to choose, feel free to reach out via call or WhatsApp and we'll guide you based on your symptoms. Any additional tests, if required, will be recommended during your first consultation.</li>
                        <li>The meal plans are shared within 24 hours of consultation.</li>
                        <li><strong>Fees are non-refundable and non-transferable.</strong></li>
                        <li>Appointments happen on video chat, so you can sign up from anywhere across the globe.</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
