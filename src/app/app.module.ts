import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list-feature/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-feature/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book-feature/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book-feature/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-book-feature/recipe-details/recipe-details.component';
import { HeaderComponent } from './header/header/header.component';
import { RecipeBookComponent } from './recipe-book-feature/recipe-book.component';


@NgModule({
  declarations: [
    AppComponent,

    ShoppingListComponent,
    ShoppingListEditComponent,

    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,

    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
