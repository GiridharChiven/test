import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'display',
    component: DisplayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
