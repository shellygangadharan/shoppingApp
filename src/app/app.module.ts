import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropDownDirective } from './shared/drop-down.directive';
import {AccountsService}  from './accounts.service' ;
import {LoggingService}  from './logging.service' ;
import {RecipeService}  from './recipe.service' ;
import {ShoppingService} from './shopping-list/shopping.service' ;


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    HeaderComponent,
    NewAccountComponent,
    AccountComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropDownDirective
  ],
  imports: [
    BrowserModule
  ],
 providers: [AccountsService, LoggingService, RecipeService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
