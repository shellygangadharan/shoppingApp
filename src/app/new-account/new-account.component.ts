import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService } from '../logging.service' ;
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]
})
export class NewAccountComponent {

     onCreateAccount(accountName: string, accountStatus: string) {
       this.accountsService.onAccountAdded({
        name: accountName,
        status: accountStatus
       });

        this.loggingService.logStatusChange(accountStatus) ;
 
    }
  

  constructor(private loggingService: LoggingService,private accountsService : AccountsService){
    accountsService.statusUpdate.subscribe((status : string) => alert(' New status '+ status)) ;
  } 
   
  
}
