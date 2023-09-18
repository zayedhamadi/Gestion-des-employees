import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'Employee', component: EmployeeComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'login', component: WelcomePageComponent },
  { path: 'Formulaire', component: FormulaireComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Form', component: FormComponent },
  { path: '**', component: WelcomePageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
