import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   item;
   edit()
   {
     this.route.navigate(['/form']);
   }
  constructor(private savedata: TransferService, private route : Router) {
   // this.item=savedata.show();
    //this.item = JSON.parse(localStorage.getItem("fulldetails"));
   
   }

  ngOnInit() {
    this.item=this.savedata.show();
  }

}
