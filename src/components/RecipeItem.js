import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeItem.css';

const RecipeItem = ({ recipe }) => {
    const { image, label, ingredientLines, calories } = recipe.recipe;
    const link = recipe._links.self.href ?? "";

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };
    const linkElements = link.split("/");
    const lastElements = linkElements[linkElements.length - 1];
    const recipeId = lastElements.split("?")[0];

    return (
        <Link to={`/recipe/${recipeId}`}
            style={linkStyle} className="recipe-link">
            <div className="recipe-item">
                <img src={image} alt={label} className="recipe-thumbnail" />
                <div className="recipe-item-details">
                    <h2 className="recipe-item-title">{label}</h2>
                    <p className="recipe-secondary">Ingredients: {ingredientLines.join(', ')}</p>
                    <p className="recipe-secondary">Calories: {calories.toFixed(2)}</p>
                </div>
            </div >
        </Link>
    );
};

export default RecipeItem;
