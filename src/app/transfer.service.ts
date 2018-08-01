import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
    save;
  constructor() { }
   getData(take){
      this.save=take;
   }

   show(){
     return this.save;
   }


}
