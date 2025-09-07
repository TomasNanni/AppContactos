import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactListPage } from './pages/contact-list-page/contact-list-page';

export const routes: Routes = [
    {
        path:"",
        component: LoginPage
    },
    {
        path:"contact-list",
        component: ContactListPage
    }
];
