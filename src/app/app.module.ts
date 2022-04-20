import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { RatingComponent } from './rating/rating.component';
import { AddSongComponent } from './song-add-form/song-add-form.component';
import { SongItemComponent } from './song-item/song-item.component';
import { SortButtonComponent } from './sort-button/sort-button.component';


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
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
