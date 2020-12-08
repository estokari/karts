import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RiderComponent } from './components/rider/rider.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes = [
    { path: '', component: HomeComponent},
    { path: 'rider/:id', component: RiderComponent},

];
export const routing = RouterModule.forRoot(appRoutes);