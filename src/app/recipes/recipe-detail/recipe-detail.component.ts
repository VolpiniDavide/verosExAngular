import { RecipesService } from "src/app/recipes.service";
import { Recipe } from "./../recipe-list/recipe.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  currentRicetta: Recipe = null;

  constructor(private service: RecipesService) {}

  ngOnInit() {
    this.service.recipeChanged.subscribe(
      // qui devo sempre metter i due casi: va male va bene
      newRecipe => {
        this.currentRicetta = newRecipe;
      },
      error => console.error(error)
    );
  }
}
