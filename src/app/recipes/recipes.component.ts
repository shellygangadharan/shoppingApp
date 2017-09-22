import { Component, OnInit } from '@angular/core';
import { Recipe} from './recipe.model' ;
import { RecipeService } from '../recipe.service' ;

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],

})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) {
    
   }
  mainRecipe : Recipe = null;

  ngOnInit() {
     this.recipeService.recipeEmitter.subscribe(
       ( recipeItem  : Recipe) => this.setRecipe(recipeItem) 
     );
  }

  setRecipe(recipe: Recipe){
    console.log(" set recipe of recipes called "+ recipe.name) ;
    console.log(" set image path recipe of reciped "+ recipe.imagePath) ;
    this.mainRecipe= recipe;
  }

  hasSelectedRecipe(){
    if (this.mainRecipe === null){
     console.log(" main recipe is null");
      return false;
    }else{
      console.log(" main recipe is not null");
      return true;
    }
  }
}
