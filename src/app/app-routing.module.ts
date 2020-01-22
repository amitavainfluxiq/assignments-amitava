import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormPageComponent } from './form-page/form-page.component';
import { TablePageComponent } from './table-page/table-page.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'form', component: FormPageComponent},
  {path:'table', component: TablePageComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
