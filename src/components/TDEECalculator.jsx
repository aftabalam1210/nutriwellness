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
            const tdee = Math.round(bmr * parseFloat(activity));
            setResult(tdee);
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
                            <label>Activity Level</label>
                            <select value={activity} onChange={(e) => setActivity(e.target.value)} required>
                                <option value="1.2">Sedentary (little/no exercise)</option>
                                <option value="1.375">Light (1-3 days/week)</option>
                                <option value="1.55">Moderate (3-5 days/week)</option>
                                <option value="1.725">Very Active (6-7 days/week)</option>
                                <option value="1.9">Extra Active (physical job/2x training)</option>
                            </select>
                        </div>

                        <div className="tdee-actions">
                            <button type="submit" className="btn btn-primary">
                                <Calculator size={18} style={{ marginRight: '8px' }} />
                                Calculate
                            </button>
                            <button type="button" className="btn btn-outline" onClick={reset}>
                                <RefreshCw size={18} />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="tdee-result-card">
                    {result ? (
                        <div className="result-display fade-in">
                            <div className="tdee-label">Maintenance Calories</div>
                            <div className="tdee-value">{result}</div>
                            <div className="tdee-unit">kcal/day</div>
                            <p className="tdee-message">
                                This is your estimated daily calorie needs to maintain your current weight.
                            </p>
                        </div>
                    ) : (
                        <div className="result-placeholder">
                            <Calculator size={64} opacity={0.2} />
                            <p>Enter your details to calculate your TDEE</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TDEECalculator;
