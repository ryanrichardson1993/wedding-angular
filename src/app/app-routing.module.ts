import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OosDaytimeComponent } from './oos-daytime/oos-daytime.component';
import { OosEveningComponent } from './oos-evening/oos-evening.component';

const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  { path: 'day', component: OosDaytimeComponent},
  { path: 'default', component: OosEveningComponent},
  { path: '**', redirectTo: '/default' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
