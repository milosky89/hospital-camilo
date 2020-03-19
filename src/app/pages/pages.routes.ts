import { RxjsComponent } from './rxjs/rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule,Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { LoginGuardGuard } from '../services/service.index';


const pagesRoutes: Routes = [

    { 
        path: '',
     component: PagesComponent,
     canActivate:[LoginGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {titulo:'Home'}},
            { path: 'progress', component: ProgressComponent, data: {titulo:'Progreso'} },
            { path: 'graficas1', component: Graficas1Component, data: {titulo:'Graficas'} },
            { path: 'promesas', component: PromesasComponent, data: {titulo:'Promesas'} },
            { path: 'account', component: AccountSettingsComponent, data: {titulo:'Ajustes tema'} },
            { path: 'rxjs', component: RxjsComponent, data: {titulo:'RxJs'}},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];

export  const  PAGES_ROUTES = RouterModule.forChild( pagesRoutes );