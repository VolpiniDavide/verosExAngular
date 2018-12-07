import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { Recipe } from "./recipes/recipe-list/recipe.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  newRecipes = new EventEmitter<Recipe[]>();

  recipes: Recipe[] = [];

  selectedRecipe: Recipe = null;

  changeSelectedRecipe(ricetta: Recipe) {
    console.log("changeSelectedRecipe", ricetta);
    this.selectedRecipe = ricetta;
  }

  searchRecipes(searchTerm: string = "cake") {
    const response = this.http
      .get(this.URL + searchTerm)
      .toPromise()
      .then((resp: { meals: [] }) => {
        // resp sarà un oggetto ( Preso da internet ) che contiene una proprietà array chiamata meals
        console.log("ricette ricevutissime", resp);
        this.recipes = resp.meals.map(function(meal: any) {
          // metto any percheè sennò mi dà errore perchè non conosce l'oggetto, ma compila comunque
          const myRecipe = new Recipe(
            meal.strMeal,
            meal.strInstructions,
            meal.strMealThumb
          );
          return myRecipe;
        });
        console.log("recipes rimappate", this.recipes);

        this.newRecipes.emit(this.recipes);
      })
      .catch(error => {
        console.error("ERRORE!!!", error);
      });
  }

  constructor(private http: HttpClient) {} // mettere nel costruttore la variabile me la crea, in quest caso http
}
