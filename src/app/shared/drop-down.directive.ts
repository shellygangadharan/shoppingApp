import { Directive, HostListener , HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

 
@HostBinding('class.open')isOpen : boolean = false;

@HostListener('click') click(){
 console.log('clicked on appDropDown '+ this.isOpen) ;
 this.isOpen = !this.isOpen;
}



  constructor() { }

}
