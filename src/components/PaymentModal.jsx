import React, { useState } from 'react';
import { X, CreditCard, Lock } from 'lucide-react';
import './PaymentModal.css';

const PaymentModal = ({ plan, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 2000);
    };

    if (success) {
        return (
            <div className="modal-overlay">
                <div className="modal-content success">
                    <div className="success-icon">🎉</div>
                    <h3>Payment Successful!</h3>
                    <p>Welcome to the {plan.name} plan.</p>
                    <p>We've sent a confirmation email to you.</p>
                    <button className="btn btn-primary" onClick={onClose}>Close</button>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}><X /></button>

                <div className="modal-header">
                    <h3>Complete Your Purchase</h3>
                    <p>You are subscribing to the <strong>{plan.name}</strong> plan.</p>
                    <div className="modal-price">{plan.price}</div>
                </div>

                <form className="payment-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Card Number</label>
                        <div className="input-with-icon">
                            <CreditCard size={20} className="icon" />
                            <input type="text" placeholder="0000 0000 0000 0000" maxLength="19" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Expiry Date</label>
                            <input type="text" placeholder="MM/YY" maxLength="5" required />
                        </div>
                        <div className="form-group">
                            <label>CVC</label>
                            <input type="text" placeholder="123" maxLength="3" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Cardholder Name</label>
                        <input type="text" placeholder="Ex. John Doe" required />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                        {loading ? <span className="spinner"></span> : `Pay ${plan.price}`}
                        {!loading && <Lock size={16} style={{ marginLeft: '8px' }} />}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentModal;
