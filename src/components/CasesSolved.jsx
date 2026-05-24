import React, { useState } from 'react';
import './CasesSolved.css';
import { Award, ArrowRight, Activity, TrendingDown, CheckCircle, Quote } from 'lucide-react';
import { solvedCases } from '../data'; // Import central dynamic cases data

const CasesSolved = () => {
    const [activeTab, setActiveTab] = useState(0);
    const cases = solvedCases;

    return (
        <section className="cases-solved" id="cases-solved">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-tag">Clinical Outcomes</span>
                    <h2 className="section-title center">Cases Solved</h2>
                    <p className="section-subtitle">
                        Evidence-based, life-changing transformations through medical nutrition therapy.
                    </p>
                </div>

                <div className="cases-tabs">
                    {cases.map((item, index) => (
                        <button
                            key={index}
                            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <span className="tab-patient">{item.patientName}</span>
                            <span className="tab-tagline">{item.tagline}</span>
                        </button>
                    ))}
                </div>

                <div className="case-card fade-in">
                    <div className="case-info-side">
                        <div className="case-badge">
                            <Award size={18} />
                            <span>{cases[activeTab].role}</span>
                        </div>
                        
                        <h3 className="case-title">The Case Study</h3>
                        <p className="case-easy-words">{cases[activeTab].easyWords}</p>

                        <div className="patient-review-box">
                            <div className="quote-icon-wrapper">
                                <Quote size={24} />
                            </div>
                            <blockquote className="patient-quote">
                                "{cases[activeTab].quote}"
                            </blockquote>
                            <div className="patient-footer">
                                <strong>— {cases[activeTab].patientName}</strong>
                                <span>Patient Review</span>
                            </div>
                        </div>
                    </div>

                    <div className="case-stats-side">
                        <h3 className="stats-title">
                            <Activity size={20} />
                            Biochemical & Physical Parameters
                        </h3>

                        <div className="parameters-list">
                            {cases[activeTab].parameters.map((param, pIdx) => (
                                <div key={pIdx} className="parameter-row">
                                    <div className="parameter-header">
                                        <span className="parameter-name">{param.name}</span>
                                        <span className="parameter-status">{param.status}</span>
                                    </div>
                                    <div className="parameter-bar-wrapper">
                                        <div className="param-val before">
                                            <span className="label">Before</span>
                                            <span className="value">{param.before}</span>
                                        </div>
                                        <div className="param-arrow">
                                            <ArrowRight size={16} />
                                        </div>
                                        <div className="param-val after">
                                            <span className="label">After</span>
                                            <span className="value">{param.after}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="outcomes-footer">
                            <CheckCircle size={18} />
                            <span>Verified Clinical Improvement</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasesSolved;
