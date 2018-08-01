import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransferService } from '../transfer.service'
import { Router } from '../../../node_modules/@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profileForm: FormGroup
  match(){
    if(this.profileForm.value.pass!==this.profileForm.value.conpass)
    {
      console.log("passwords do not match")
    }
    else{
     console.log("password matched");
    }
  }

 
  
  // storeDetails(){
  //   localStorage.setItem("fulldetails",JSON.stringify(this.profileForm.value));
  // }
 
   public Data = [];
  constructor( private savedata: TransferService, private route : Router) { 

  this.profileForm = new FormGroup({
    
    fname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(2) ]),
    lname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    empid: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
    gender: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(4), Validators.maxLength(6) ]),
    pass: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
    //  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8, 16}$')]),
    conpass: new FormControl('', [Validators.required])
    
  });
  

}
type:string="password";
    showHide(){
      if(this.type==="text")
        this.type="password";
     else
      this.type="text";   
    }
storeDetails(){
  this.savedata.getData(this.profileForm.value);
  this.route.navigate(['/details']);
}
ngOnInit() {
   
}
}
