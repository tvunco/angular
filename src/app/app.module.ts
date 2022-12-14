import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FerinicioComponent } from './components/ferinicio/ferinicio.component';
import { FersobremiComponent } from './components/fersobremi/fersobremi.component';
import { FerserviComponent } from './components/ferservi/ferservi.component';
import { FerprofolioComponent } from './components/ferprofolio/ferprofolio.component';
import { FercontactComponent } from './components/fercontact/fercontact.component';
import { FerfooterComponent } from './components/ferfooter/ferfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FerinicioComponent,
    FersobremiComponent,
    FerserviComponent,
    FerprofolioComponent,
    FercontactComponent,
    FerfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
