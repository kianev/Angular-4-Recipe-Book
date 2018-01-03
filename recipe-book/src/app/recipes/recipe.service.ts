import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Eggs in Panagurishte',
      'Eggs with cheese in sauce',
      'https://static.pexels.com/photos/691114/pexels-photo-691114.jpeg',
      [
        new Ingredient('Eggs', 4),
        new Ingredient('Cheese', 0.2)
      ]),

    new Recipe(
      'Bread',
      'Make a delicious bread',
      'https://static.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Water', 0.3)])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipebyId(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
   this.slService.addIngredients(ingredients);
  }
}
