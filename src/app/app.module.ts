import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomAttributeDirective } from './directives/custom-attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomAttributeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
