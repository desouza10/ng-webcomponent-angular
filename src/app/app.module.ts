import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebComponentModule } from './web-component/web-component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WebComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
