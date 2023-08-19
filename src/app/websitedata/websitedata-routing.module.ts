import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsitedataComponent } from './websitedata/websitedata.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'WebsiteData', pathMatch: 'full' },
  {
    path: 'WebsiteData', component: WebsitedataComponent,
    children:[
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      {
        path:'Home',component:HomeComponent
      },
      {
        path:'About',component:AboutComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsitedataRoutingModule { }
