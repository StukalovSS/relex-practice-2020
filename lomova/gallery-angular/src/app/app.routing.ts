import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ViewComponent } from './view/view.component';
import { ViewGuard } from './guards/view.guard';

const routes: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'view',
        component: ViewComponent,
        canActivate: [ViewGuard]
    },
    {
        path: '**',
        redirectTo: '/gallery'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }