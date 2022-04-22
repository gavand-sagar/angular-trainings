import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  Change() {
    // this.username = "mike"
    this.usenameSubject.next('mike')
  }

  // username: string = 'sagar'

  usenameSubject = new BehaviorSubject<string>('Sagar');


  // usenameSubject = new BehaviorSubject<number>(10);

  constructor() { }
}
