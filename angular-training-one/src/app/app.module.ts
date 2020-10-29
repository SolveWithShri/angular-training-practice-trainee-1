import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RandomOneComponent } from './components/random-one/random-one.component';
import { RandomTwoComponent } from './components/random-two/random-two.component';
import { RandomThreeComponent } from './components/random-three/random-three.component';
import { RandomFourComponent } from './components/random-four/random-four.component';
import { CircularComponent } from './components/circular/circular.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    RandomOneComponent,
    RandomTwoComponent,
    RandomThreeComponent,
    RandomFourComponent,
    CircularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
