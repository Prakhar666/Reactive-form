import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
 
  { path: '', 
    redirectTo: '/form', 
    pathMatch: 'full' 
  },

  { path :'form',
    component: FormComponent
  }, 
  
  { path: 'details',
    component: DetailsComponent
  }
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
