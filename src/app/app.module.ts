import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UsertableComponent } from './components/usertable/usertable.component';

import { MatTableModule } from '@angular/material/';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatTableModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
