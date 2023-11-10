import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './common/guards/auth.guard';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        resolve: {
            user: UserResolver,
        },
        children: [
            {
                component: DashboardComponent,
                path:  ''
            },
            {
                path: 'projects',
                loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
            }
        ]
    },
    {
        path: 'login',
        component: AuthorizationComponent,
    },
    {
        path: 'logout',
        component: AuthorizationComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', paramsInheritanceStrategy: 'always' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}