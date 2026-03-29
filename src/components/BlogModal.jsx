import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import './BlogModal.css';

const BlogModal = ({ post, onClose }) => {
    if (!post) return null;

    // Robust click handler
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="blog-modal-content">

                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="blog-modal__header">
                    <img src={post.image} alt={post.title} className="blog-modal__image" />
                    <div className="blog-modal__title-box">
                        <span className="blog-modal__date">
                            <Calendar size={14} style={{ display: 'inline', marginRight: '5px' }} />
                            {post.date}
                        </span>
                        <h2>{post.title}</h2>
                    </div>
                </div>

                <div className="blog-modal__body">
                    {post.fullContent && post.fullContent.map((paragraph, index) => (
                        <p key={index} className="blog-paragraph">
                            {paragraph}
                        </p>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BlogModal;
