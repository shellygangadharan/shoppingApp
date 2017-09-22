import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService } from '../logging.service' ;
import {AccountsService} from '../accounts.service' ;



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 //   providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 
  onSetTo(status: string) {
    this.accountsService.onStatusChanged({id: this.id, newStatus: status})
    this.loggingService.logStatusChange(status) ;
 
  }

   constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}     
   
}
