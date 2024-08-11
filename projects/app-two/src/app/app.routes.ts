import { Routes } from '@angular/router';
import { HomeModule } from '../../../app-one/src/app/home/home.module';
import { AboutComponent } from '../../../app-one/src/app/about/about.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./app.component').then((module) => HomeModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
