import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RiderComponent } from './components/rider/rider.component';

const appRoutes = [
  { path: 'rider/:id', component: RiderComponent},
];
export const routing = RouterModule.forRoot(appRoutes);