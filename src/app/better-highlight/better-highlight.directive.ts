import { Directive ,OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
@Input() defaultColor : string = 'blue';
@Input() highlightColor : string = 'red';
ngOnInit(){

}

@HostBinding('style.backgroundColor') backGroundColor: string ;
@HostListener('mouseenter') mouseEnter(){
 this.backGroundColor = this.defaultColor;
}


@HostListener('mouseleave') mouseLeave(){
 this.backGroundColor = this.highlightColor;
}

}
