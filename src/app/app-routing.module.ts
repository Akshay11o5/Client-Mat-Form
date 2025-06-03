import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientdashComponent } from './shared/components/clientdash/clientdash.component';
import { ClientSingleComponent } from './shared/components/client-single/client-single.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },

  {
    path: 'posts',
    component: ClientdashComponent,
  },
  {
    path: 'posts/:id',
    component: ClientSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
