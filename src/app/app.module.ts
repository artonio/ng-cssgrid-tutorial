import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CssGridDirective} from './css-grid-directives/CssGridDirective';
import {CssGridAreaDirective} from './css-grid-directives/CssGridAreaDirective';

@NgModule({
  declarations: [
    AppComponent,
    CssGridDirective,
    CssGridAreaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
