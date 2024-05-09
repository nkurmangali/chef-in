import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeApiClient from '../services/recipesClient';
import "./RecipeDetails.css"

const RecipeDetails = () => {
    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const data = await recipeApiClient.getRecipeById(id);
                console.log(data)
                setRecipe(data.recipe);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };
        fetchRecipeDetails();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    const {
        images,
        label,
        calories,
        ingredientLines,
        digest,
        cuisineType,
        dietLabels,
        source,
        totalDaily,
        totalTime,
        totalNutrients,
    } = recipe;

    console.log('nut', totalNutrients)
    console.log('daily', totalDaily)


    return (
        <div className="recipe-details">
            <div className='recipe-main'>
                <img className="recipe-image" src={images.LARGE.url} alt={label} />
                <div className='recipe-info'>
                    <h1 className="recipe-label">{label}</h1>
                    <div className="recipe-source">Source: {source}</div>
                    <div className="recipe-calories">
                        Calories: {Math.round(calories)}
                    </div>
                    <div className="recipe-time">Total Time: {totalTime} minutes</div>
                    <div className="recipe-cuisine">Cuisine: {cuisineType}</div>
                    <div className="recipe-diet-labels">
                        Diet Labels: {dietLabels.join(', ')}
                    </div>
                </div>

            </div>

            <div className="recipe-details-info">
                <div className='ingredient-container'>
                    <h2>Ingredients</h2>
                    <ul className="ingredients-list">
                        {ingredientLines.map((ingredient, index) => (
                            <li key={index} className='ingredient-item'>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='nutrients-tables'>
                    <div>
                        <h2>Total Nutrients</h2>
                        <table className="nutrition-table">
                            <th>Nutrient</th>
                            <th>Quantity</th>
                            <th>% of Daily Norm</th>
                            {Object.keys(totalNutrients).map((k, index) => (
                                <tr key={index}>
                                    <td className='nutrient-label'>{totalNutrients[k].label}</td>
                                    <td className='nutrient-value'>
                                        {Math.round(totalNutrients[k].quantity)} {totalNutrients[k].unit}
                                    </td>
                                    <td className='nutrient-value'>
                                        {k in totalDaily ?
                                            <>
                                                {Math.round(totalDaily[k].quantity)}{totalDaily[k].unit}
                                            </> :
                                            <>-</>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RecipeDetails;
