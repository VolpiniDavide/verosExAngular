import { RecipesService } from "./recipes.service";
import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { NullAstVisitor } from "@angular/compiler";
import { Recipe } from "./recipes/recipe-list/recipe.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  selectedRecipe: Recipe = null;

  onSelectedRecipe(recipe) {
    console.log("ricetta ricevuta dal nonno");
    this.selectedRecipe = recipe;
  }

  constructor(private serv: RecipesService) {}

  ngOnInit() {
    this.serv.searchRecipes("butter");
  }
}
