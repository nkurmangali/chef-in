import { API_ID, API_KEY } from '../utils/constants';

class RecipeAPIClient {
  constructor(apiId, apiKey) {
    this.apiId = apiId;
    this.apiKey = apiKey;
    this.baseUrl = "https://api.edamam.com/api/recipes/v2";
  }

  async searchRecipes(query) {
    try {
      const response = await fetch(`${this.baseUrl}?q=${query}&app_id=${this.apiId}&app_key=${this.apiKey}&type=public`);
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  }

  async getRecipeById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}?app_id=${this.apiId}&app_key=${this.apiKey}&type=public`);
      if (!response.ok) {
        throw new Error("Failed to fetch recipe");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recipe:", error);
      throw error;
    }
  }

  async getRecipeByUri(uri) {
    try {
      const response = await fetch(`${this.baseUrl}/by_uri?uri=${uri}&app_id=${this.apiId}&app_key=${this.apiKey}`);
      if (!response.ok) {
        throw new Error("Failed to fetch recipe");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recipe:", error);
      throw error;
    }
  }
}

const recipeApiClient = new RecipeAPIClient(API_ID, API_KEY);
export default recipeApiClient;
  