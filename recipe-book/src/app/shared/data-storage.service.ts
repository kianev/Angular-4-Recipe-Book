import {Injectable} from "@angular/core";
import {Http, Headers, Response} from '@angular/http';
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import 'rxjs/Rx';
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipe() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://angular4-recipe-book-ae13e.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes(), {
      observe: 'body'
    });
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>('https://angular4-recipe-book-ae13e.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
