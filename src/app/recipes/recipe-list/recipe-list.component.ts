import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test file', 'https://eatnorth.com/sites/default/files/styles/span9_thumbnail/public/yidas_portuguese_chicken.jpg?itok=1jUEdr0n'),
    new Recipe('Second Recipe', 'This is second file', 'https://eatnorth.com/sites/default/files/styles/span9_thumbnail/public/yidas_portuguese_chicken.jpg?itok=1jUEdr0n')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
