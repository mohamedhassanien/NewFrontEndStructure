import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { ProspectComponent } from './components/pages/prospect/prospect.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'statistics',
                component: StatisticsComponent,
                canActivate:[authGuard]
            },
            {
                path: 'prospect',
                component: ProspectComponent,
                canActivate:[authGuard]
            }
        ]
    }
];