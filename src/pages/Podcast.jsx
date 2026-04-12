import React from 'react';
import { PlayCircle } from 'lucide-react';
import './Pages.css';

const Podcast = () => {
    const episodes = [
        {
            id: 1,
            title: "Healing your Gut Naturally",
            description: "Deep dive into the science of microbiome and how to restore balance with diet.",
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
            duration: "45 min",
            date: "May 20, 2024"
        },
        {
            id: 2,
            title: "The Truth about Sugar Addictions",
            description: "Understanding how refined sugar affects our brain and strategies to break the cycle.",
            image: "https://images.unsplash.com/photo-1589367920969-9910d1963b65?auto=format&fit=crop&q=80&w=800",
            duration: "32 min",
            date: "May 12, 2024"
        },
        {
            id: 3,
            title: "Mindful Eating for Modern Life",
            description: "Practical tips to slow down and listen to your body's hunger signals in a busy world.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
            duration: "28 min",
            date: "May 05, 2024"
        },
        {
            id: 4,
            title: "Holistic Immunity Boosting",
            description: "Using ancient wisdom and modern science to strengthen your body's defenses.",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
            duration: "38 min",
            date: "April 28, 2024"
        }
    ];

    return (
        <div className="podcast-page">
            <header className="page-hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1500")' }}>
                <div className="hero-content">
                    <h1>The Wellness Podcast</h1>
                    <p>Unlock the secrets to a healthier lifestyle with our weekly expert talks.</p>
                </div>
            </header>

            <main className="container page-section">
                <div className="section-title">
                    <h2>Latest Episodes</h2>
                    <p>Expert insights delivered to your ears.</p>
                </div>

                <div className="content-grid">
                    {episodes.map(item => (
                        <div key={item.id} className="content-card">
                            <div className="card-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="card-info">
                                <span className="card-meta">{item.date} • {item.duration}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href="#" className="play-btn">
                                    <PlayCircle size={24} />
                                    Listen Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Podcast;
