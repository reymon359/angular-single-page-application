import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
// The useHash is more efficient and is for using hashes in the routes
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
