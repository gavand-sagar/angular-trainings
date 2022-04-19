import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sagar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  joke: string;
  Clicked: boolean = false;
  response: {}

  /**
   *
   */
  constructor(private http: HttpClient) {

  }
  FetchAJoke() {
    this.Clicked = true;
    this.joke = ''
    this.http.get('https://randomuser.me/api/').subscribe((response: any) => {
      this.response = response;
      let userResponse = response as Root

     this.response =  userResponse.results[0]
    })


  }
}

export interface Root {
  results: Result[]
  info: Info
}

export interface Result {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Registered
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

export interface Name {
  title: string
  first: string
  last: string
}

export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}

export interface Street {
  number: number
  name: string
}

export interface Coordinates {
  latitude: string
  longitude: string
}

export interface Timezone {
  offset: string
  description: string
}

export interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export interface Dob {
  date: string
  age: number
}

export interface Registered {
  date: string
  age: number
}

export interface Id {
  name: string
  value: any
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface Info {
  seed: string
  results: number
  page: number
  version: string
}
