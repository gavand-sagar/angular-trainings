import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'sagar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string;

  // user

  users: string[] = [];

  PostToServer() {

    this.http.post('http://localhost:3000/users', {
      username: this.username
    }).subscribe(response => {
      let convertedResponse: string[] = response as string[];
      this.users = convertedResponse
    })

    // this.users.push(this.username);
    // this.username = ''
  }


  constructor(private http: HttpClient, private appservice: AppService) {
    this.http.get('http://localhost:3000/users').subscribe(response => {
      let convertedResponse: string[] = response as string[];
      this.users = convertedResponse
    })
  }
















  fact: string;

  loading: boolean = false;


  userInFormation: {
    userImage: string,
    userName: string,
    userBirthDate: string
  } = {
      userBirthDate: '',
      userImage: '',
      userName: ''
    }


  /**
   *
   */



  FetchANewFact() {

    this.loading = true;


    this.http.get('http://localhost:3000/cat-fact').subscribe(response => {


      let convertedResponse: CatFactResponse = response as CatFactResponse;

      this.fact = convertedResponse.fact;
      this.loading = false;
    });

  }


  FetchANewUser() {

    this.loading = true;


    this.http.get('https://randomuser.me/api/').subscribe(response => {

      // console.log(response)

      let convertedResponse: UserResponse = response as UserResponse;

      this.userInFormation.userName = convertedResponse.results[0].name.first + ' ' + convertedResponse.results[0].name.last
      this.userInFormation.userImage = convertedResponse.results[0].picture.large;
      // this.fact = convertedResponse.fact;
      // this.loading = false;
    });
  }
}


class UserResponse {
  results: { name: Name, picture: { medium: string; large: string }, dob: { date: string } }[]
}


class Name {
  first: string;
  last: string
}



class CatFactResponse {
  fact: string;
  length: number;
}

// objs.sort( compare );

// {"fact":"Cats can predict earthquakes. We humans are not 100% sure how they do it. There are several different theories.","length":111}