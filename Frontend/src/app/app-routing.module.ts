import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProposComponent } from './propos/propos.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'list', component: RestaurantListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'propos', component: ProposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
