import React from 'react';
import './Recipes.css';
import { Clock, Flame, ChefHat } from 'lucide-react';
import { recipes } from '../data'; // Import from central data

const Recipes = () => {
    return (
        <section className="recipes" id="recipes">
            <div className="container">

                <div className="section-header text-center">
                    <h2 className="section-title center">Wholesome Recipes</h2>
                    <p className="recipes-subtitle">Nourish your body with these delicious, nutritionist-approved meals.</p>
                </div>

                <div className="recipes__grid">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="recipe-card">
                            <div className="recipe-image">
                                <img src={recipe.image} alt={recipe.title} onError={(e) => e.target.src = 'https://placehold.co/600x400?text=Recipe'} />
                                <span className="category-tag">{recipe.category}</span>
                            </div>
                            <div className="recipe-content">
                                <h3>{recipe.title}</h3>
                                <div className="recipe-meta">
                                    <span><Clock size={16} /> {recipe.time}</span>
                                    <span><Flame size={16} /> {recipe.cal}</span>
                                </div>
                                <button className="btn btn-sm btn-outline">View Recipe</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <button className="btn btn-primary">
                        <ChefHat size={18} style={{ marginRight: '8px' }} />
                        Browse All Recipes
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Recipes;
