import { Directive , TemplateRef,Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

@Input() set appUnless(condition : boolean){

  if (!condition) {
    this.vRef.createEmbeddedView(this.template) ;
  }else{
     this.vRef.clear()
  }

}

  constructor( private template: TemplateRef<any>, private vRef: ViewContainerRef) { 

  }

}
