import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitedataRoutingModule } from './websitedata-routing.module';
import { WebsitedataComponent } from './websitedata/websitedata.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    WebsitedataComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WebsitedataRoutingModule
  ]
})
export class WebsitedataModule { }
