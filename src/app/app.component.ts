import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sagar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // isAdmin = false;



  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.email]],
      password: ['']
    })
  }



  // username: string = '';
  // password: string = '';


  // isErrorToShow: boolean = false;


  users: any[] = [];


  // IsUserNameLenght3(): boolean {
  //   return this.username.length >= 3;
  // }

  AddUser() {

    // if(this.userForm.get('username')?.invalid){
    //   alert('invalid')
    // }

    // this.userForm.get('username')?.errors?.['required']

    // this.userForm.get('username')?.errors?.['minLength']

    // this.userForm.get('username')?.errors?.['minLength']

    let username = this.userForm.get('username')?.value;
    let password = this.userForm.get('password')?.value;


    // this.isErrorToShow = true;
    // if (this.username == '' || this.password == '') {
    //   alert('pls enter all fields')
    //   return
    // }

    this.users.push({
      username: username,
      password: password
    })


    // this.userForm.setValue('password', '')

    this.userForm.reset()

    // this.username = ''
    // this.password = ''
  }

  todaysDate: Date = new Date();

  // GetUpperCaseUserName():string{
  //   return this.username.toUpperCase();
  // }


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
    // return this.songs

    if (this.filterText == '') {
      return this.songs
    } else {
      return this.songs.filter(x => x.name.toLowerCase().includes(this.filterText.toLowerCase()))
    }
  }


  name: string = 'HELLO';



  GetName(): string {
    return this.name;
  }

  // Get


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