import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourListComponent } from './tour/tour-list/tour-list.component';
import { TourCreateComponent } from './tour/tour-create/tour-create.component';
import { TourEditComponent } from './tour/tour-edit/tour-edit.component';
import { TourDeleteComponent } from './tour/tour-delete/tour-delete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TourViewComponent } from './tour/tour-view/tour-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TourListComponent,
    TourCreateComponent,
    TourEditComponent,
    TourDeleteComponent,
    TourViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
