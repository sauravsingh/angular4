import { ConvertTemperatureComponent } from './convert-temperature/convert-temperature.component';
import { ConvertWeightComponent } from './convert-weight/convert-weight.component';
import { WordCharCountComponent } from './word-char-count/word-char-count.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'convertWeight', component: ConvertWeightComponent },
  { path: 'convertTemp', component: ConvertTemperatureComponent },
  { path: 'countWChar', component: WordCharCountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }


