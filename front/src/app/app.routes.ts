import { Routes } from '@angular/router';
import { IntialHomeComponent } from './intial-home/intial-home.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { DocunoComponent } from './user/docuno/docuno.component';
import { DocsComponent } from './documentos/docs/docs.component';
import { AuthGuard } from './roles/auth.guard';

export const routes: Routes = [

    { path: "home", component: IntialHomeComponent },
    { path: "login", component: LoginComponent },
    { path: "documentos", component: DocsComponent },

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'user', canActivate: [AuthGuard],
        data: { roles: ['ESTUDIANTE'] }, children: [
            { path: "docuno", component: DocunoComponent ,canActivate: [AuthGuard] },


        ]
    },




];
