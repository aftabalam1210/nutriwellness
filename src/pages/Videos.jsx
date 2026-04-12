import React from 'react';
import { Youtube } from 'lucide-react';
import './Pages.css';

const Videos = () => {
    const videos = [
        {
            id: 1,
            title: "5-Minute Morning Detox",
            description: "A quick guide to kickstart your metabolism every single morning.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
            category: "Wellness Tips",
            views: "12K views"
        },
        {
            id: 2,
            title: "Healthy Lunch Meal Prep",
            description: "Prepare 5 days of nutritious lunches in under 1 hour.",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
            category: "Cooking",
            views: "8.5K views"
        },
        {
            id: 3,
            title: "Anti-Inflammatory Superfoods",
            description: "The top 10 foods you should eat to reduce chronic inflammation.",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
            category: "Education",
            views: "15K views"
        },
        {
            id: 4,
            title: "Weight Loss Myths Debunked",
            description: "Scientific evidence against common diet misconceptions.",
            image: "https://images.unsplash.com/photo-1511688858341-b06f8c7b8098?auto=format&fit=crop&q=80&w=800",
            category: "Consultation",
            views: "20K views"
        }
    ];

    return (
        <div className="videos-page">
            <header className="page-hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1500")' }}>
                <div className="hero-content">
                    <h1>Video Library</h1>
                    <p>Visual guides to your holistic health transformation.</p>
                </div>
            </header>

            <main className="container page-section">
                <div className="section-title">
                    <h2>Trending Videos</h2>
                    <p>Your journey to wellness, visualized.</p>
                </div>

                <div className="content-grid">
                    {videos.map(item => (
                        <div key={item.id} className="content-card">
                            <div className="card-image">
                                <img src={item.image} alt={item.title} />
                                <div className="video-overlay" style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    background: 'rgba(0,0,0,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <div style={{
                                        background: 'white',
                                        width: '60px', height: '60px',
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                                    }}>
                                        <div style={{
                                            width: 0, height: 0,
                                            borderTop: '10px solid transparent',
                                            borderBottom: '10px solid transparent',
                                            borderLeft: '15px solid var(--color-primary)',
                                            marginLeft: '4px'
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-info">
                                <span className="card-meta">{item.category} • {item.views}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href="#" className="play-btn">
                                    <Youtube size={24} />
                                    Watch Video
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Videos;
