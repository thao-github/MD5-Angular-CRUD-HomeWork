import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TourListComponent} from "./tour/tour-list/tour-list.component";
import {TourCreateComponent} from "./tour/tour-create/tour-create.component";
import {TourEditComponent} from "./tour/tour-edit/tour-edit.component";
import {TourDeleteComponent} from "./tour/tour-delete/tour-delete.component";
import {TourViewComponent} from "./tour/tour-view/tour-view.component";

const routes: Routes = [
  {path:'', component: TourListComponent},
  {path:'tour/create', component: TourCreateComponent},
  {path:'tour/edit/:id', component: TourEditComponent},
  {path:'tour/delete/:id', component: TourDeleteComponent},
  {path:'tour/view/:id', component: TourViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
