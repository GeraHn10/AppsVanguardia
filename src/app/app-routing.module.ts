import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path:'',
    component:AlbumsComponent
  },
  {
    path:'album/:id/details',
    component:DetailsComponent
  },
  {
    path:'profile',
    component:ProfileComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
