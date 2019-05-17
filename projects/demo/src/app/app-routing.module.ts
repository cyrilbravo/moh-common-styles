import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordDemoComponent } from '../components/password-demo/password-demo.component';
import { AddressDemoComponent } from '../components/address-demo/address-demo.component';

const routes: Routes = [
    {
        path: 'PasswordComponent',
        component: PasswordDemoComponent
        // NOTE - Below is not implemented, just proposed.
        // data: {
        //     componentLabel: 'Password',
        //     showPasswordStrength: true,
        //     selector: 'common-password',
        // }
    },
    {
        path: 'AddressComponent',
        component: AddressDemoComponent
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
