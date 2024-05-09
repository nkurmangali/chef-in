import React, { useState } from 'react';
import recipeApiClient from '../services/recipesClient';
import RecipeItem from '../components/RecipeItem';
import './Home.css'

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); 

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);  
    };

    const loadMoreRecipes = async () => {
        try {
            if (nextPage) {
                const response = await fetch(nextPage);
                if (!response.ok) {
                    throw new Error("Failed to fetch more recipes");
                }
                const data = await response.json();
                setRecipes(recipes.concat(data.hits));
                setNextPage(data._links?.next?.href ?? null);
            }
        } catch (error) {
            console.error("Error loading more recipes:", error);
        }
    };

    const handleSearch = async () => {
        try {
            const data = await recipeApiClient.searchRecipes(searchQuery);
            setRecipes(data.hits);
            setNextPage(data._links?.next?.href ?? null);
        } catch (error) {
            console.error("Error searching recipes:", error);
        }
    };

    return (
        <div className="recipe-list-container">
            <div className='search-bar'>
                <input
                    type="text"
                    value={searchQuery}
                    className='search-input'
                    onChange={handleInputChange}
                    placeholder="Search for recipes..."
                />
                <button onClick={handleSearch} className='search-button'>Search Recipes</button>
            </div>
            {recipes.map(recipe => (
                <RecipeItem key={recipe.recipe.uri} recipe={recipe} />
            ))}
            {nextPage && <button onClick={loadMoreRecipes} className='load-more'>Load More</button>}
        </div>
    );
};

export default Home;
