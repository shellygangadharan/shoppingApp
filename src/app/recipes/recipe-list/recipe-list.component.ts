import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[] = [];
/*  recipes: Recipe[] = [
                        new Recipe('A Test Recipe',
                            'This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/food-159693_960_720.jpg'
    )
     ] ;
//    'https://cdn.pixabay.com/photo/2016/06/15/19/food-159693_960_720.jpg')
  
    
     @Output() recipeEmitter : EventEmitter<Recipe> = new EventEmitter<Recipe> ();

*/
 
  constructor(private recipeService : RecipeService) {
   
   }

  ngOnInit() {
     this.recipes = this.recipeService.getRecipes();
  }

  onClick(){
    this.recipeService.addToRecipeList();
     this.recipes = this.recipeService.getRecipes();
  }


  gotRecipe ( recipe : Recipe){
    console.log(" Inside gotRecipe recipe-list") ;
  // this.recipeEmitter.emit(recipe);
  }
}
