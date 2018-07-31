import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    item;
  constructor() {
    
    this.item = JSON.parse(localStorage.getItem("fulldetails"));
   }

  ngOnInit() {
  }

}
