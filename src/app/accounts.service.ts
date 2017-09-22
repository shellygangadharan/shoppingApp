 import {EventEmitter,Injectable} from '@angular/core' ;
 import {LoggingService} from  './logging.service';
 
 @Injectable()
 export class AccountsService{

   accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

 statusUpdate :EventEmitter<string> = new EventEmitter <string>() ;

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
   
    console.log(" Added new account  from Service"+ newAccount) ;
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logStatusChange(this.accounts[updateInfo.id].status) ;
    this.statusUpdate.emit(this.accounts[updateInfo.id].status) ;
   
  }

  constructor(private loggingService: LoggingService) {}
}
 
 