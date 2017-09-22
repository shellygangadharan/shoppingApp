 import {EventEmitter,Injectable} from '@angular/core' ;
 import {Ingredient} from '../shared/ingredient.model' ;
 

 export class ShoppingService{



 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  
  getIngredients() {
    return this.ingredients.slice() ;
  }

ingredientEmitter : EventEmitter<Ingredient>= new EventEmitter<Ingredient>()  ;
 
  addItems(ingredient : Ingredient){
    this.ingredients.push(ingredient) ;
    this.ingredientEmitter.emit(ingredient) ;
  }

  constructor() {}
}
 
 