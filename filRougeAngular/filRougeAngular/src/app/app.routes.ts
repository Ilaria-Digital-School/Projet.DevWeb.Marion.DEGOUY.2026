import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';
import { Admin } from './components/admin/admin';
import { AddprestationForm } from './components/addprestation-form/addprestation-form';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "about", component: About},
    {path: "contact", component: Contact},
    {path: "portfolio", component: Portfolio},
    {path: "admin", component: Admin},
    {path: "addprestation-form", component: AddprestationForm},
    {path: "editProducts", component: AddprestationForm},
    {path: "editUsers", component:Contact}

];
