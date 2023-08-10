import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'WebsiteData',
    loadChildren: () => import('./websitedata/websitedata.module').then(m => m.WebsitedataModule)
  },
  {
    path:'',redirectTo:'WebsiteData',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
