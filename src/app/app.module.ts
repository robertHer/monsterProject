import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonsterComponent } from './monster/monster.component';

import {FormsModule} from '@angular/forms';
import { MonsterDataComponent } from './monster-data/monster-data.component';
@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    MonsterDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
