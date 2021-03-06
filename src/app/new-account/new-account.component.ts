import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  // @Output() accountAdded = new EventEmitter<{name:string,status:string}>();
  constructor(private loggingService:LoggingService,
              private accountsService:AccountsService) {
                accountsService.updatedStatus.subscribe(
                  (status:string)=> alert('Status has been updated new status '+status)
                )
              }

  ngOnInit() {
  }
  onCreateAccount(accountName:string,accountStatus:string)
  {
    // this.accountAdded.emit(
    //   {
    //     name:accountName,
    //     status: accountStatus
    //   }
    // );
    this.accountsService.createAccount(accountName,accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

}
