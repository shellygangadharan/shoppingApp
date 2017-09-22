import { Component, OnInit, EventEmitter,ElementRef,ViewChild, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service' ;
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// @Output() ingredient : EventEmitter<Ingredient>= new EventEmitter<Ingredient>()  ;
@ViewChild('amount') amount: ElementRef;
@ViewChild('name') name: ElementRef;
  constructor( private shoppingService:ShoppingService) { }

  ngOnInit() {
  }

  addItem(){
    
    const ingred= new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value );
    // this.ingredient.emit(ingred);
    this.shoppingService.addItems(ingred) ;
  }
}
