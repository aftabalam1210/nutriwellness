import React from 'react';
import './Pricing.css';
import { Check, Info } from 'lucide-react';

const plans = [
    {
        name: "One-time Consultation",
        desc: "1 appointment for 40 minutes",
        price: "₹600",
        period: "",
        features: [
            "A one-on-one session to address specific doubts",
            "Ideal for clearing nutrition myths",
            "Guidance on improving eating patterns",
            "No customised diet plan included"
        ],
        color: "var(--color-bg)",
        btnColor: "var(--color-secondary)",
        btnText: "#fff",
        planId: "one-time"
    },
    {
        name: "1 Month Program",
        desc: "4 Appointments",
        price: "₹3,000",
        period: "",
        features: [
            "Weekly appointments for 30 mins (1st is 1 hr)",
            "Personalised structured meal plan",
            "Weekly interactions to review & alter plans",
            "Phone, WhatsApp & email support"
        ],
        color: "var(--color-surface)",
        btnColor: "var(--color-primary)",
        btnText: "#fff",
        planId: "1-month"
    },
    {
        name: "3 Months Program",
        desc: "12 Appointments",
        price: "₹9,000",
        period: "",
        features: [
            "Weekly appointments for 30 mins (1st is 1 hr)",
            "Personalised structured meal plan",
            "Weekly interactions to review & alter plans",
            "Phone, WhatsApp & email support"
        ],
        color: "var(--color-bg)",
        btnColor: "var(--color-primary)",
        btnText: "#fff",
        planId: "3-months"
    },
    {
        name: "6 Months Program",
        desc: "24 Appointments",
        price: "₹18,000",
        period: "",
        features: [
            "Weekly appointments for 30 mins (1st is 1 hr)",
            "Personalised structured meal plan",
            "Weekly interactions to review & alter plans",
            "Phone, WhatsApp & email support"
        ],
        color: "var(--color-surface)",
        btnColor: "var(--color-primary)",
        btnText: "#fff",
        planId: "6-months"
    }
];

const Pricing = () => {

    const handleSelectPlan = (planId) => {
        // Dispatch event for Contact form to catch
        const event = new CustomEvent('planSelected', { detail: planId });
        window.dispatchEvent(event);

        // Scroll smoothly to contact form
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="pricing-toggle-wrapper text-center" style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title">Investment in Your Health</h2>
                    <div style={{
                        marginTop: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem'
                    }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', fontWeight: '600', marginBottom: '0.5rem' }}>
                            You have to choose:
                        </p>
                        <div style={{ 
                            display: 'flex', 
                            gap: '1.5rem', 
                            flexWrap: 'wrap', 
                            justifyContent: 'center' 
                        }}>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.8rem', 
                                background: 'white', 
                                padding: '0.8rem 1.5rem', 
                                borderRadius: '50px', 
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(214, 140, 107, 0.3)'
                            }}>
                                <span style={{ background: 'var(--color-secondary)', color: 'white', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold', fontSize: '0.9rem' }}>A</span>
                                <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-dark)' }}>One time consultation</span>
                            </div>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.8rem', 
                                background: 'white', 
                                padding: '0.8rem 1.5rem', 
                                borderRadius: '50px', 
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(93, 112, 82, 0.3)'
                            }}>
                                <span style={{ background: 'var(--color-primary)', color: 'white', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold', fontSize: '0.9rem' }}>B</span>
                                <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-dark)' }}>Curated program - 1, 3 or 6 months</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pricing__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="pricing-card"
                            style={{ backgroundColor: plan.color, border: '1px solid var(--color-accent)' }}
                        >
                            <div className="card-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <p className="plan-desc" style={{ minHeight: '40px' }}>{plan.desc}</p>
                            </div>

                            <div className="plan-features-box">
                                <ul style={{ minHeight: '180px' }}>
                                    {plan.features.map((feature, i) => (
                                        <li key={i}><Check size={16} color="var(--color-primary)" style={{ marginRight: '8px', flexShrink: 0, marginTop: '4px' }} /> <span style={{ fontSize: '0.9rem' }}>{feature}</span></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-footer">
                                <div className="plan-price">
                                    {plan.price}<span className="period">{plan.period}</span>
                                </div>
                                <button
                                    className="btn btn-pricing"
                                    style={{ backgroundColor: plan.btnColor, color: plan.btnText, width: '100%', marginTop: '1rem' }}
                                    onClick={() => handleSelectPlan(plan.planId)}
                                >
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Notes Section */}
                <div className="pricing-notes" style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-dark)' }}>
                        <Info size={24} color="var(--color-secondary)" /> Important Details
                    </h3>
                    <ol style={{ paddingLeft: '1.2rem', color: 'var(--color-text)', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
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
