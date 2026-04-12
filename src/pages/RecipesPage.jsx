import React from 'react';
import Recipes from '../components/Recipes';
import './Pages.css';

const RecipesPage = () => {
    return (
        <div className="recipes-page">
            <header className="page-hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1500")' }}>
                <div className="hero-content">
                    <h1>Healthy Recipes</h1>
                    <p>Delicious, nutrient-dense meals that prove healthy eating can be a joy.</p>
                </div>
            </header>

            <main className="page-section">
                <div className="section-title">
                    <h2>Fuel Your Body</h2>
                    <p>Curated collections for every meal of the day.</p>
                </div>
                <Recipes />
            </main>
        </div>
    );
};

export default RecipesPage;
