import { Recipe} from './recipes/recipe.model' ;
import { EventEmitter} from '@angular/core' ;


export class RecipeService{

   recipeItem : Recipe ;
   recipeEmitter : EventEmitter<Recipe> = new EventEmitter<Recipe> ();

    private recipes: Recipe[] = [
                        new Recipe('A Test Recipe',
                            'This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/food-159693_960_720.jpg'
    )
     ] ;

    setRecipeItem(recipe : Recipe){
        this.recipeItem = recipe;
        console.log('Recipe item : ' + recipe.name);  
        this.recipeEmitter.emit(this.recipeItem);
    }

    getRecipeItem() {
        return this.recipeItem ;
    }


    addToRecipeList(){
        console.log(" ading new item in service")
         this.recipes.push(new Recipe('3','description',''));
    }

    getRecipes(){
        return this.recipes.slice() ;
    }
}