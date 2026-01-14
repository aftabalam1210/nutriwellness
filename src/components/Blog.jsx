import React from 'react';
import './Blog.css';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data'; // Import from central data

const Blog = () => {
    return (
        <section className="blog" id="blog">
            <div className="container">

                <div className="section-header text-center">
                    <h2 className="section-title center">Knowledge Hub</h2>
                    <p className="blog-subtitle">Latest insights on health, nutrition, and wellness.</p>
                </div>

                <div className="blog__grid">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} onError={(e) => e.target.src = 'https://placehold.co/600x400?text=Article'} />
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <a href="#" className="read-more">
                                    Read Article <ArrowRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Blog;
