import { Component, Input } from '@angular/core';

@Component({
  selector: 'sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css']
})
export class SortButtonComponent {

  @Input()
  displayText: string = '';


}
