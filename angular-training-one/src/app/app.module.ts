import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesBasicsComponent } from './components/directives-basics/directives-basics.component';
import { FormsModule } from '@angular/forms';
import { NgClassDirectiveDemoComponent } from './components/ng-class-directive-demo/ng-class-directive-demo.component';
import { NgStyleDirectiveDemoComponent } from './components/ng-style-directive-demo/ng-style-directive-demo.component';
import { NgIfDirectiveDemoComponent } from './components/ng-if-directive-demo/ng-if-directive-demo.component';
import { NgForDirectiveDemoComponent } from './components/ng-for-directive-demo/ng-for-directive-demo.component';
import { NgSwitchDirectiveDemoComponent } from './components/ng-switch-directive-demo/ng-switch-directive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesBasicsComponent,
    NgClassDirectiveDemoComponent,
    NgStyleDirectiveDemoComponent,
    NgIfDirectiveDemoComponent,
    NgForDirectiveDemoComponent,
    NgSwitchDirectiveDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
