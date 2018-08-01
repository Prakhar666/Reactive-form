import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './/app-routing.module';

import { TransferService } from './transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailsComponent,
          
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
