import React, { useState } from 'react';
import './BMICalculator.css';
import { Calculator, RefreshCw } from 'lucide-react';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBmi(bmiValue);

            let cat = '';
            if (bmiValue < 18.5) cat = 'Underweight';
            else if (bmiValue < 24.9) cat = 'Normal Weight';
            else if (bmiValue < 29.9) cat = 'Overweight';
            else cat = 'Obese';
            setCategory(cat);
        }
    };

    const reset = () => {
        setWeight('');
        setHeight('');
        setBmi(null);
        setCategory('');
    };

    return (
        <section className="bmi-section" id="recipes">
            {/* Note: ID is recipes in navbar but functionally it's BMI? Or is BMI separate? 
            Navbar says BMI Link -> #calculator. 
            Original request: "4. BMI callculation".
            I'll use ID "bmi" or "calculator". Navbar has #bmi for BMI Check.
        */}
            <div className="container bmi-container" id="bmi">
                <div className="bmi-content">
                    <h2>BMI Calculator</h2>
                    <p>Find out your Body Mass Index to understand your health status better.</p>

                    <form className="bmi-form" onSubmit={calculateBMI}>
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

                        <div className="bmi-actions">
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

                <div className="bmi-result-card">
                    {bmi ? (
                        <div className="result-display fade-in">
                            <div className="bmi-value">{bmi}</div>
                            <div className={`bmi-category ${category.toLowerCase().replace(' ', '-')}`}>
                                {category}
                            </div>
                            <p className="bmi-message">
                                {category === 'Normal Weight'
                                    ? "Great job! Keep maintaining your healthy lifestyle."
                                    : "Consider booking a consultation to reach your health goals."}
                            </p>
                        </div>
                    ) : (
                        <div className="result-placeholder">
                            <Calculator size={64} opacity={0.2} />
                            <p>Enter your details to see your result</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BMICalculator;
