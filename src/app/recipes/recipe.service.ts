import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Fried Chicken Brest 🍗',
      'A-Super Tasty Chicken',
      'https://eatnorth.com/sites/default/files/styles/span9_thumbnail/public/yidas_portuguese_chicken.jpg?itok=1jUEdr0n',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Masala', 1)
      ]),
    new Recipe('Fish Chips',
      'Yummy Yummy Fish with Fries 🤤',
      'https://thumbs.dreamstime.com/b/fish-chips-traditional-battered-fried-118257239.jpg',
      [
        new Ingredient('fish', 1),
        new Ingredient('Fries', 2)
      ])
  ];
  constructor(private slService: ShoppingListService) {
  }
  // tslint:disable-next-line:typedef
  getRecipes() {
    return this.recipes.slice();
  }
  // tslint:disable-next-line:typedef
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
