import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sagar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  constructor(private http: HttpClient) {

  }


  FetchANewFact() {

    this.loading = true;


    this.http.get('https://catfact.ninja/fact').subscribe(response => {


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