import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutGuard } from './guards/about.guard';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'view',
        component: ViewComponent,
        canActivate: [AboutGuard],
        canDeactivate: [AboutGuard]
    },
    {
        path: '**',
        component: HomeComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {}