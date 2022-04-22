import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
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


  useName: string = ''


  /**
   *
   */
  constructor(private appservice: AppService) {
    // this.useName = this.appservice.username

    appservice.usenameSubject.subscribe(x => {      
      this.onRatingChange.emit('5')
      this.useName = x;
    })
  }
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



