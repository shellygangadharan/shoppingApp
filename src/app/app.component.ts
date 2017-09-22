import { Component , OnInit} from '@angular/core';
import { AccountsService } from './accounts.service' ;
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  accounts : {name: string, status : string}[] = [];

  data : string;
  onHeaderClick(event) {
    this.data= event;
    console.log("  This is the event "+ this.data) ;
  }

  constructor(private accountsService : AccountsService){}

  ngOnInit(){
     this.accounts = this.accountsService.accounts ;
  }   

}
