import { Component } from '@angular/core';
import { Tag } from '../../../../shared/models/Tag';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags?: Tag[]

  constructor(foodService: FoodService){
    this.tags = foodService.getAllTags()
  }
}
