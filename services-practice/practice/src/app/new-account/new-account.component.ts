import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
//import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status:string)=>alert('New Status : '+status));
   }

  onCreateAccount(accounName: string, accountStatus: string) {
    this.accountsService.addAccount(accounName, accountStatus);    
    //this.loggingService.logStatusChange(accountStatus);
  }

  ngOnInit() {
  }

}
