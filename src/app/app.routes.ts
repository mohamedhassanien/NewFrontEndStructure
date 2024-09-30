import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { ProspectComponent } from './components/pages/prospect/prospect.component';
import { authGuard } from './guard/auth.guard';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { VerfiyComponent } from './components/auth/verfiy/verfiy.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';

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
        path:'reset-password',
        component:ResetPasswordComponent
    },
    {
        path:'sign-up',
        component:RegisterComponent
    },
    {
        path:'verify',
        component:VerfiyComponent
    },
    {
        path:'forgot-password',
        component:ForgotPasswordComponent
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
