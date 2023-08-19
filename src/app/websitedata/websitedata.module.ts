import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitedataRoutingModule } from './websitedata-routing.module';
import { WebsitedataComponent } from './websitedata/websitedata.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    WebsitedataComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    WebsitedataRoutingModule
  ]
})
export class WebsitedataModule { }
