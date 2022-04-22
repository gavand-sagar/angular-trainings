import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'add-song-form',
  templateUrl: './song-add-form.component.html',
  styleUrls: ['./song-add-form.component.css']
})
export class AddSongComponent {

  inputSongValue: string = "";
  inputRatingValue: string = "";
  inputFileValue: string = "";

  @Input()
  useName: string = ''


  @Output()
  onFormAdd: EventEmitter<any> = new EventEmitter<any>();


  InputValueChanged(event: any) {
    this.inputSongValue = event.target.value;
  }

  RatingValueChanged(event: any) {
    this.inputRatingValue = event;
  }

  FileValueChanged(event: any) {
    //this.inputFileValue = event.target.value;

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.inputFileValue = reader.result as string;




      let song = { name: this.inputSongValue, rating: this.inputRatingValue, image: this.inputFileValue };


      this.onFormAdd.emit(song);



    };

  }

  AddSomething() {


    let song = { name: this.inputSongValue, rating: this.inputRatingValue, image: this.inputFileValue };


    this.onFormAdd.emit(song);


    // this.onFormAdd.emit()

  }



}
