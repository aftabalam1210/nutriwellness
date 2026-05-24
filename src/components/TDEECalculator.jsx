import React, { useState } from 'react';
import './TDEECalculator.css';
import { Calculator, RefreshCw } from 'lucide-react';

const TDEECalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('men');
    const [activity, setActivity] = useState('1.2');
    const [result, setResult] = useState(null);

    const calculateTDEE = (e) => {
        e.preventDefault();
        if (height && weight && age) {
            let bmr;
            if (gender === 'men') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }
            const bmrRounded = Math.round(bmr);
            const tdee = Math.round(bmr * parseFloat(activity));
            setResult({
                bmr: bmrRounded,
                tee: tdee,
                pal: parseFloat(activity)
            });
        }
    };

    const reset = () => {
        setHeight('');
        setWeight('');
        setAge('');
        setGender('men');
        setActivity('1.2');
        setResult(null);
    };

    return (
        <section className="tdee-section" id="tdee">
            <div className="container tdee-container">
                <div className="tdee-content">
                    <h2>TDEE Calculator</h2>
                    <p>Total Daily Energy Expenditure estimates how many calories you burn per day based on your activity level.</p>

                    <form className="tdee-form" onSubmit={calculateTDEE}>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Weight (kg)</label>
                                <input
                                    type="number"
                                    placeholder="Ex. 70"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>Height (cm)</label>
                                <input
                                    type="number"
                                    placeholder="Ex. 170"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label>Age</label>
                                <input
                                    type="number"
                                    placeholder="Ex. 25"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>Gender</label>
                                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                                    <option value="men">Male</option>
                                    <option value="women">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-group full-width">
                            <label>Activity Level (PAL)</label>
                            <select value={activity} onChange={(e) => setActivity(e.target.value)} required>
                                <option value="1.2">Sedentary (Primarily sitting/lying) = 1.2</option>
                                <option value="1.375">Lightly active (Sedentary job with some walking, light domestic chores, or light exercise 1–2 days/week) = 1.375</option>
                                <option value="1.55">Moderately active [Active daily routine (e.g., walking, construction work) or moderate exercise 3–5 days/week] = 1.55</option>
                                <option value="1.725">Active (workout 7days/week) = 1.725</option>
                                <option value="1.9">Very active (Physically demanding job or intense training/sports daily) = 1.9</option>
                            </select>
                        </div>

                        <div className="tdee-actions">
                            <button type="submit" className="btn btn-primary">
                                <Calculator size={18} style={{ marginRight: '8px' }} />
                                Calculate TEE
                            </button>
                            <button type="button" className="btn btn-outline" onClick={reset}>
                                <RefreshCw size={18} />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="tdee-result-card">
                    {result ? (
                        <div className="tee-result-display fade-in">
                            <div className="tee-result-header">
                                <div className="tdee-label">Total Energy Expenditure (TEE)</div>
                                <div className="tdee-value">{result.tee}</div>
                                <div className="tdee-unit">kcal/day</div>
                            </div>
                            
                            <div className="tee-breakdown">
                                <h4>Energy Formula Breakdown</h4>
                                <div className="formula-box">
                                    TEE = BMR &times; PAL
                                </div>
                                <div className="tee-row">
                                    <span>Basal Metabolic Rate (BMR):</span>
                                    <strong>{result.bmr} kcal</strong>
                                </div>
                                <div className="tee-row">
                                    <span>Physical Activity Level (PAL):</span>
                                    <strong>{result.pal}</strong>
                                </div>
                                <div className="tee-row tee-total-row">
                                    <span>Calculation:</span>
                                    <span>{result.bmr} &times; {result.pal} = <strong>{result.tee} kcal</strong></span>
                                </div>
                                <p className="tee-note">
                                    * BMR is the energy your body burns at complete rest. PAL (Physical Activity Level) represents your daily activity multiplier. TEE is the total calories you burn per day.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="result-placeholder">
                            <Calculator size={64} opacity={0.2} style={{ marginBottom: '1rem' }} />
                            <p>Enter your details and activity level (PAL) to calculate your TEE (Total Energy Expenditure)</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TDEECalculator;
