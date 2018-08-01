import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   item;
  constructor(private savedata: TransferService) {
    this.item=savedata.show();
    //this.item = JSON.parse(localStorage.getItem("fulldetails"));
   }

  ngOnInit() {
  }

}
