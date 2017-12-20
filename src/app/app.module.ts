import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConvertWeightComponent } from './convert-weight/convert-weight.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ConvertTemperatureComponent } from './convert-temperature/convert-temperature.component';
import { FormsModule } from '@angular/forms';
import { WordCharCountComponent } from './word-char-count/word-char-count.component';


@NgModule({
  declarations: [
    AppComponent,
    ConvertWeightComponent,
    DashboardComponent,
    MenuComponent,
    ConvertTemperatureComponent,
    WordCharCountComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    //HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
