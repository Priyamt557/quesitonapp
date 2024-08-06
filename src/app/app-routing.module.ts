import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttemptComponent } from './attempt/attempt.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{path:'', component:MainComponent},{path:'attempt',component:AttemptComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
