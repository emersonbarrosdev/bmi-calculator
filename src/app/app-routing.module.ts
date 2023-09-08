import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImcCalculatorComponent } from './element/imc-calculator/imc-calculator.component';

const routes: Routes = [
  {
    path: 'imc-calculator',
    component: ImcCalculatorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
