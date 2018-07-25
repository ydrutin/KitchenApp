import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [
    new Recipe('burger',
                'tasty one' , '../../../assets/images/SE32171.jpg'),

    new Recipe('pizza' , 'good one' , '../../../assets/images/pep-pizza.jpg')


  ];

  constructor() { }

  ngOnInit() {
  }

}
