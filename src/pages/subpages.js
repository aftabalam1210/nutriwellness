// Podcast.jsx
import React from 'react';

const Podcast = () => {
    return (
        <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
            <h1>Podcast</h1>
            <p>Listen to our latest health and wellness episodes coming soon!</p>
        </div>
    );
};

export default Podcast;

// ---

// Videos.jsx
import React from 'react';

const Videos = () => {
    return (
        <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
            <h1>Videos</h1>
            <p>Watch our health tips and recipe videos coming soon!</p>
        </div>
    );
};

export default Videos;

// ---

// RecipesPage.jsx
import React from 'react';
import Recipes from '../components/Recipes';

const RecipesPage = () => {
    return (
        <div style={{ padding: '100px 0' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1>All Recipes</h1>
                <p>Browse our collection of healthy and delicious recipes.</p>
            </div>
            <Recipes />
        </div>
    );
};

export default RecipesPage;

// ---

// BlogsPage.jsx
import React from 'react';
import Blog from '../components/Blog';

const BlogsPage = () => {
    return (
        <div style={{ padding: '100px 0' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1>Our Blog</h1>
                <p>Expert insights and tips for your wellness journey.</p>
            </div>
            <Blog />
        </div>
    );
};

export default BlogsPage;
