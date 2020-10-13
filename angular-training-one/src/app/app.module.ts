import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharesValueComponent } from './components/shares-value/shares-value.component';
import { DisplayPriceComponent } from './components/display-price/display-price.component';
import { ChangePriceComponent } from './components/change-price/change-price.component';

@NgModule({
  declarations: [
    AppComponent,
    SharesValueComponent,
    DisplayPriceComponent,
    ChangePriceComponent
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
