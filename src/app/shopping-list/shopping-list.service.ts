import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';


export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 20),
    new Ingredient('Banana', 30),
    new Ingredient('Mango', 11)
  ];
  // tslint:disable-next-line:typedef
  getIngredients() {
    return this.ingredients.slice();
  }
  // tslint:disable-next-line:typedef
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  // tslint:disable-next-line:typedef
  addIngredients(ingredients: Ingredient[]) {
    // for (const ingredient of ingredients) {
    // this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
