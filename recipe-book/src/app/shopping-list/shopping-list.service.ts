import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  getIngredients() {
    return this.ingredients.slice(); // returning a copy of the ingredients array
  }

  addIngredient(ingredint) {
    this.ingredients.push(ingredint);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
   this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
