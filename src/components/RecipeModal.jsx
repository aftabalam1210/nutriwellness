import React, { useEffect } from 'react';
import { X, Clock, Flame, ChefHat, Wheat, Droplet, Dumbbell, Egg } from 'lucide-react';
import './RecipeModal.css';

const RecipeModal = ({ recipe, onClose }) => {
    if (!recipe) return null;

    // Use a more robust click handler
    const handleOverlayClick = (e) => {
        // Only close if the click is directly on the overlay, not its children
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
            <div className="recipe-modal-content">

                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="recipe-modal__header">
                    <img src={recipe.image} alt={recipe.title} className="recipe-modal__image" />
                    <div className="recipe-modal__title-box">
                        <h2>{recipe.title}</h2>

                        <div className="recipe-meta-primary">
                            <span><Clock size={18} /> {recipe.time}</span>
                            <span><Flame size={18} /> {recipe.cal}</span>
                            <span><ChefHat size={18} /> {recipe.category}</span>
                        </div>

                        {/* Creative Nutrition Overlay */}
                        {recipe.nutrition && (
                            <div className="recipe-nutrition-overlay">
                                <div className="nutrient-badge">
                                    <Wheat size={16} />
                                    <div className="nutrient-info">
                                        <span className="nutrient-val">{recipe.nutrition.carbohydrates}</span>
                                        <span className="nutrient-lbl">Carbs</span>
                                    </div>
                                </div>
                                <div className="nutrient-badge">
                                    <Dumbbell size={16} />
                                    <div className="nutrient-info">
                                        <span className="nutrient-val">{recipe.nutrition.protein}</span>
                                        <span className="nutrient-lbl">Protein</span>
                                    </div>
                                </div>
                                <div className="nutrient-badge">
                                    <Droplet size={16} />
                                    <div className="nutrient-info">
                                        <span className="nutrient-val">{recipe.nutrition.fat}</span>
                                        <span className="nutrient-lbl">Fat</span>
                                    </div>
                                </div>
                                {/* Using Egg icon for Calcium/General health as generic bone/milk might not fit aesthetic */}
                                <div className="nutrient-badge">
                                    <Egg size={16} />
                                    <div className="nutrient-info">
                                        <span className="nutrient-val">{recipe.nutrition.calcium}</span>
                                        <span className="nutrient-lbl">Calcium</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="recipe-modal__body">

                    <p className="recipe-description">{recipe.description}</p>

                    <div className="recipe-columns">
                        <div className="recipe-ingredients">
                            <h3>Ingredients</h3>
                            <div className="ingredients-list">
                                {recipe.ingredients && recipe.ingredients.map((item, index) => {
                                    // Handle structured ingredients (sections)
                                    if (typeof item === 'object' && item.section) {
                                        return (
                                            <div key={index} className="ingredient-section">
                                                <h4>{item.section}</h4>
                                                <ul>
                                                    {item.items.map((subItem, subIndex) => (
                                                        <li key={subIndex}>{subItem}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    }
                                    // Handle simple string ingredients (legacy support)
                                    return (
                                        <ul key={index}>
                                            <li>{item}</li>
                                        </ul>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="recipe-instructions">
                            <h3>Instructions</h3>
                            <ol>
                                {recipe.instructions && recipe.instructions.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RecipeModal;
