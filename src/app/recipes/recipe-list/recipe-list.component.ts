import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [

    new Recipe(
      "Patate riso e cozze",
      " una buona ricetta",
      "https://ips.plug.it/cips/buonissimo.org/cms/2012/04/tiella-di-riso-patate-e-cozze.jpg"
      ),

    new Recipe(
      "pizza",
      " la più buona di tutte",
      "https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg"
    ),

    new Recipe(
      "bistecca",
      " al sangue è meglio",
      "https://carnedistruzzo.it/wp-content/uploads/carne-bistecca-163614.jpg"
      ),

    new Recipe(
      "torta",
      " diabaete prendimi",
      "https://images.lacucinaitaliana.it/wp-content/uploads/2016/09/Torta-di-compleanno.jpg"
    ),
    ];

  constructor() { }

  ngOnInit() {
  }

}
