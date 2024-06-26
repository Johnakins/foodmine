import { Component } from '@angular/core';
import { Food } from '../../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = []
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe((params)=> {
      if(params.searchTerm)
        this.foods = foodService.getAllFoodBySearchTerm(params.searchTerm)
      else if(params.tag)
        this.foods = foodService.getAllFoodByTag(params.tag)
      else
      this.foods = foodService.getAll()
    })
    
  }
}
