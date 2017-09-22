import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() clickEventEmitter = new EventEmitter<string>() ;

   

  ngOnInit() {
  }

  onClickOfHeader(data: string){

     if (data === 'shopping'){
       console.log(' emit shopping') ;
      this.clickEventEmitter.emit('shopping');
     }else {
       this.clickEventEmitter.emit('recipe');
       console.log('emit recipe');
     }
  }
}
