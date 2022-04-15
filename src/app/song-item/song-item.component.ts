import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent {


  @Input()
  imageurl: string = '';

  @Input()
  songname: string = '';

  @Input()
  rating: string = '';


  @Output()
  onRatingChange: EventEmitter<string> = new EventEmitter<string>();


  changeSongName() {
    this.songname = "sagar";



    let a = {
      name: 'sgar'
    }


    a.name = "";

    a['name'] = "somsting"


  }

  RateFiveStar() {


  }

  ChangeRating(newRating: string) {
    this.onRatingChange.emit(newRating);
  }

  setVluae(value: any, fieldname: string) {
    // if (fieldname == "songname") {
    //   this.songname = value
    // }

    // if (fieldname ==) {
    //   this.rating = value
    // }

    // if (fieldname) {
    //   this.imageUrl = value
    // }


    // this[fieldname] = value.toString();



  }

  InputValueChanged(sdf: any) {

  }


}



