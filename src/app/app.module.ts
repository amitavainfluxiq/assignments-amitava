import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormPageComponent, Formpopup } from './form-page/form-page.component';
import { TablePageComponent } from './table-page/table-page.component';

import { DemoMaterialModule } from './materialModule';
import { CookieService } from 'ngx-cookie-service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormPageComponent,
    TablePageComponent,
    Formpopup
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,

    FormsModule
  ],
  entryComponents: [Formpopup],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
