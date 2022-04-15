import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortButtonComponent } from './sort-button/sort-button.component';
import { SongItemComponent } from './song-item/song-item.component';
import { RatingComponent } from './rating/rating.component';
import { AddSongComponent } from './song-add-form/song-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SortButtonComponent,
    SongItemComponent,
    RatingComponent,
    AddSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
