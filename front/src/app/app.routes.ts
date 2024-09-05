import { Routes } from '@angular/router';
import { IntialHomeComponent } from './intial-home/intial-home.component';
import { LoginComponent } from './login/login.component';
import { DocsComponent } from './documentos/docs/docs.component';
import { AuthGuard } from './roles/auth.guard';
import { DocunoComponent } from './user/documentos/docuno/docuno.component';
import { DoccincoComponent } from './user/documentos/doccinco/doccinco.component';
import { DoccuatroComponent } from './user/documentos/doccuatro/doccuatro.component';
import { DocdosComponent } from './user/documentos/docdos/docdos.component';
import { DocnueveComponent } from './user/documentos/docnueve/docnueve.component';
import { DocochoComponent } from './user/documentos/dococho/dococho.component';
import { DocseisComponent } from './user/documentos/docseis/docseis.component';
import { DocsieteComponent } from './user/documentos/docsiete/docsiete.component';
import { DoctesComponent } from './user/documentos/doctes/doctes.component';
import { FundacionFormComponent } from './vinculador/fundacion-form/fundacion-form.component';
import { ProyectoFormComponent } from './vinculador/proyecto-form/proyecto-form.component';
import { MicroProyectoFormComponent } from './vinculador/micro-proyecto-form/micro-proyecto-form.component';

export const routes: Routes = [

    //     ADMINISTRADOR : 'ADMINISTRADOR', //primer lor a crear 
    //   TUTOR: 'TUTOR',
    //   VUNCULADOR : 'VUNCULADOR',
    //   ESTUDIANTE : 'ESTUDIANTE'

    {
        path: "home", component: IntialHomeComponent, canActivate: [AuthGuard],
        data: { roles: ['ADMINISTRADOR', 'TUTOR', 'VUNCULACION', 'ESTUDIANTE'] }
    },
    { path: "login", component: LoginComponent },
    { path: "documentos", component: DocsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // ESTUDIANTE -----------------------------------------------------------------------------------------------
    {
        path: 'user', canActivate: [AuthGuard],
        data: { roles: ['ESTUDIANTE'] }, children: [
            { path: "docuno", component: DocunoComponent, canActivate: [AuthGuard] },
            { path: "docdos", component: DocdosComponent, canActivate: [AuthGuard] },
            { path: "doctres", component: DoctesComponent, canActivate: [AuthGuard] },
            { path: "doccuatro", component: DoccuatroComponent, canActivate: [AuthGuard] },
            { path: "doccinco", component: DoccincoComponent, canActivate: [AuthGuard] },
            { path: "docseis", component: DocseisComponent, canActivate: [AuthGuard] },
            { path: "docsiete", component: DocsieteComponent, canActivate: [AuthGuard] },
            { path: "dococho", component: DocochoComponent, canActivate: [AuthGuard] },
            { path: "docnueve", component: DocnueveComponent, canActivate: [AuthGuard] },


        ]
    },
    // ADMINISTRADOR -------------------------------------------------------------------------------------------
    {
        path: 'administrador', canActivate: [AuthGuard],
        data: { roles: ['ADMINISTRADOR'] }, children: [
            //  { path: "docuno", component: DocunoComponent ,canActivate: [AuthGuard] },


        ]
    },
    //VINCULADOR -------------------------------------------------------------------------------------------------

    {
        path: 'vinculador', canActivate: [AuthGuard],
        data: { roles: ['VUNCULACION'] }, children: [
              { path: "docuno", component: DocunoComponent ,canActivate: [AuthGuard] },
              { path: "fuundacion-form", component: FundacionFormComponent ,canActivate: [AuthGuard] },
              { path: "proyecto-form", component: ProyectoFormComponent ,canActivate: [AuthGuard] },
              {path: "microproyecto-form", component: MicroProyectoFormComponent ,canActivate: [AuthGuard] },


        ]
    },

];
