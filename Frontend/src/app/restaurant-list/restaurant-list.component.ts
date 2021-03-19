import { MessageService } from '../message/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  restos: any;
  constructor(private message: MessageService) {}

  ngOnInit(): void {
    this.message.getAllRestaurants().subscribe({
      next: (value) => {
        console.log(value);
        this.restos = value.data;
      },
    });
  }
}
