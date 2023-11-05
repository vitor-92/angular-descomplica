import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app/modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { MenuComponent } from './components/menu.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
