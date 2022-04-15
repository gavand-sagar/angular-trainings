import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input()
  rating: string;

  @Output()
  onRatingChange: EventEmitter<string> = new EventEmitter<string>();


  GetClass(spanIndex: number) {
    if (spanIndex <= Number(this.rating)) {
      return "blue"
    }
    else {
      return "gray"
    }
  }


  ChangeRating(newRating: number) {
    //alert(newRating)

    this.rating = newRating.toString()

    this.onRatingChange.emit(this.rating)
  }

}
