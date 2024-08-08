import { Routes } from '@angular/router';
import { HomeModule } from '../../../app-one/src/app/home/home.module';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./app.component').then((module) => HomeModule),
  },
];
