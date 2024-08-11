import { Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((module) => HomeModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
