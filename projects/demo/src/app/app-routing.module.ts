import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordDemoComponent } from '../components/password-demo/password-demo.component';

const routes: Routes = [
    {
        path: 'PasswordComponent',
        component: PasswordDemoComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
