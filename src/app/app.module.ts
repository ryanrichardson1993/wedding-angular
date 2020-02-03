import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VenueComponent } from './venue/venue.component';
import { OosDaytimeComponent } from './oos-daytime/oos-daytime.component';
import { OosEveningComponent } from './oos-evening/oos-evening.component';
import { HotelsComponent } from './hotels/hotels.component';
import { GiftsComponent } from './gifts/gifts.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { PhotosComponent } from './photos/photos.component';
import { OosComponent } from './oos/oos.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { DateTimeComponent } from './date-time/date-time.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueComponent,
    OosDaytimeComponent,
    OosEveningComponent,
    HotelsComponent,
    GiftsComponent,
    RsvpComponent,
    PhotosComponent,
    OosComponent,
    ContactComponent,
    DateTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
