import { Component } from '@angular/core';

@Component({
  selector: 'sagar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // isAdmin = false;


  fetching = false;

  FetchData() {
    // this.fetching = !this.fetching
    this.fetching = true;
  }

  //   ///

  //   setTimeout(() => {
  //     this.fetching = false
  //   }, 2000)
  // }


  // names: string[] = ["Geetha", "Sagar", "Mike", "Tom"]


  songs: any[] = [
    { name: 'Stu', rating: '2', image: 'https://picsum.photos/200/300' },
    { name: 'ABC', rating: '3', image: 'https://picsum.photos/200/300' },
    { name: 'asf', rating: '1', image: 'https://picsum.photos/200/300' },
    { name: 'qrtewr', rating: '5', image: 'https://picsum.photos/200/300' },
    { name: 'l;kk;l', rating: '2', image: 'https://picsum.photos/200/300' },
    { name: 'XYZ', rating: '4', image: 'https://picsum.photos/200/300' },
  ]

  // numbers: Person[] = [{ Name: "sagar" }, { Name : "saf"}, "Mike", "Tom"]

  GetSongs() {
    if (this.filterText == '') {
      return this.songs
    } else {
      return this.songs.filter(x => x.name.toLowerCase() == this.filterText.toLocaleLowerCase())

    }
  }


  filterText: string = '';

  OnFilterTextChange(event: any) {
    this.filterText = event.target.value
  }


  AddSomething() {
    //this.names.push(this.inputSongValue);

    // this.songs.push({ name: this.inputSongValue, rating: this.inputRatingValue, image: this.inputFileValue })

    // this.inputValue = ""

  }



  newSongAdded(song: any) {
    this.songs.push(song)
  }



  currentRating: string = ''


  InputNumberChange(event: any) {

    this.currentRating = event.target.value;
  }

  InputRatingChange(event: string) {

    this.currentRating = event;
  }


  // GetIndex(name: string): number {
  //   let index = this.names.findIndex(x => x == name);

  //   return index;

  // }


  SortByRating() {
    // alert()

    this.songs.sort(compareWithRating);

  }


  SortByName() {
    this.songs.sort(compareWithName);

  }


  SongRatingChange(event: any, index: number) {
    this.songs[index].rating = event
  }

}


class Person {
  Name: string;
}


function compareWithRating(a: any, b: any) {
  if (a.rating < b.rating) {
    return -1;
  }
  if (a.rating > b.rating) {
    return 1;
  }
  return 0;
}

function compareWithName(a: any, b: any) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
}


// objs.sort( compare );