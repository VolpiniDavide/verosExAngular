import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipesService } from "src/app/recipes.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  @Output() SelectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  onSelectedList(recipe) {
    console.log("lista selezionata" + recipe);
    this.SelectedRecipe.emit(recipe);
  }
  constructor(public recipesService: RecipesService) {
    // mettere questo nel constr è come dire che questo componente dipende dal service
    recipesService.newRecipes.subscribe(
      ricetteAggiornate => {
        console.log(ricetteAggiornate);
        this.recipes = ricetteAggiornate;
      },

      function(error) {
        console.error(error);
      }
    );
  }

  ngOnInit() {}
}
