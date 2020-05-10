import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AiCicdComponent } from './ai-cicd/ai-cicd.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent},
  { path: 'abinitio',component: AiCicdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
