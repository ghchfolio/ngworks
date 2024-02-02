import { Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';

export const routes: Routes = [
    { path: 'page1', component: Page1Component },
    { path: 'page2', loadComponent: () => import('./components/page2/page2.component').then(c => c.Page2Component) },
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: '**', component: Page1Component },
];
