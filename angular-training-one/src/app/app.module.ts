import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicOfPipesComponent } from './components/basic-of-pipes/basic-of-pipes.component';
import { CustomPipesDemoComponent } from './components/custom-pipes-demo/custom-pipes-demo.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { InrToUsdPipe } from './pipes/inr-to-usd.pipe';
import { SortPipe } from './pipes/sort.pipe';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    BasicOfPipesComponent,
    CustomPipesDemoComponent,
    FullNamePipe,
    InrToUsdPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
