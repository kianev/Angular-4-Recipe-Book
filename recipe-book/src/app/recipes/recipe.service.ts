import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Eggs in Panagurishte',
      'Eggs with cheese in sauce',
      'http://www.kulinarno-joana.com/wp-content/uploads/2010/10/DSC6529.jpg',
      [
        new Ingredient('Eggs', 4),
        new Ingredient('Cheese', 1)
      ]),

    new Recipe(
      'Bread',
      'Make a delicious bread',
      'https://s.rozali.com/p/h/l/hlqb-pitka-pechene-(3)-102093-500x334.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Water', 1)])
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
