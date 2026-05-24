import React from 'react';
import Blog from '../components/Blog';
import './Pages.css';

const ArticlesPage = () => {
    return (
        <div className="blogs-page">
            <header className="page-hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1500")' }}>
                <div className="hero-content">
                    <h1>Articles & Insights</h1>
                    <p>Deep dives into clinical nutrition, lifestyle medicine, and holistic healing.</p>
                </div>
            </header>

            <main className="page-section">
                <div className="section-title">
                    <h2>Expert Articles</h2>
                    <p>The latest in evidence-based nutrition science.</p>
                </div>
                <Blog />
            </main>
        </div>
    );
};

export default ArticlesPage;
