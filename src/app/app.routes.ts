import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },

  {
    path: 'about',
    component: AboutPageComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
