import { NgModule } from '@angular/core';
import { ButtonHighlightDirective } from './button-highlight.directive';


@NgModule({
  declarations: [
    ButtonHighlightDirective
  ],
  exports: [ButtonHighlightDirective]
})
export class ButtonHighlightModule { }
