import React, { useState } from 'react';
import './Blog.css';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data'; // Import from central data
import BlogModal from './BlogModal'; // Import Modal

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

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

                                {/* Changed href to onClick button */}
                                <button
                                    className="read-more-btn"
                                    onClick={() => setSelectedPost(post)}
                                >
                                    Read Article <ArrowRight size={16} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

            </div>

            {/* Render Modal */}
            {selectedPost && (
                <BlogModal
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}

        </section>
    );
};

export default Blog;
