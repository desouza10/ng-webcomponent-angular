import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WebComponentComponent } from '../web-component/web-component.component';
import { DefaultComponentComponent } from './components/default-component/default-component.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    WebComponentComponent,
    DefaultComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTreeModule,
    MatTableModule
  ],
  exports: [WebComponentComponent]
})
export class WebComponentModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const angularWebComponent = createCustomElement(WebComponentComponent, { injector: this.injector });
    customElements.define('web-component', angularWebComponent);
  }
 }
