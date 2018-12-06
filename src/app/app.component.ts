import { Component, Output, EventEmitter } from "@angular/core";
import { NullAstVisitor } from "@angular/compiler";
import { Recipe } from "./recipes/recipe-list/recipe.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  selectedRecipe: Recipe = null;

  onSelectedRecipe(recipe) {
    console.log("ricetta ricevuta dal nonno");
    this.selectedRecipe = recipe;
  }
}
