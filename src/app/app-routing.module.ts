import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [],
  },
  {
    path: 'result',
    component: ResultComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
