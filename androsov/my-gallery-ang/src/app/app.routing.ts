import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FullScreenComponent } from './full-screen/full-screen.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'view/:src',
        component: FullScreenComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {}