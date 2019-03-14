// 3.1 Custom Directives
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {
  
  // added
  constructor(elememt: ElementRef) {
    console.log(elememt);
    elememt.nativeElement.innerText = "Text is changed by changeText Directive. ";
  }

}
