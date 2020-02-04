import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VenueComponent } from './venue/venue.component';
import { HotelsComponent } from './hotels/hotels.component';
import { GiftsComponent } from './gifts/gifts.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { PhotosComponent } from './photos/photos.component';
import { OosComponent } from './oos/oos.component';
import { ContactComponent } from './contact/contact.component';
import { DateTimeComponent } from './date-time/date-time.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueComponent,
    HotelsComponent,
    GiftsComponent,
    RsvpComponent,
    PhotosComponent,
    OosComponent,
    ContactComponent,
    DateTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Title
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
