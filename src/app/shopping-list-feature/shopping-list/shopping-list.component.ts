import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('apples' , 5),
    new Ingredient('tomatoes', 19)
  ];
  constructor() { }

  ngOnInit() {
  }

}
