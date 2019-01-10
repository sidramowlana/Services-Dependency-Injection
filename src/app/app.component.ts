import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts=[
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Tester Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name:string, status:string})
  {
    this.accounts.push(newAccount);
  }
  
  onStatusChange(updateInfo:{id:number,newStatus:string})
  {
    this.accounts[updateInfo.id].status=updateInfo.newStatus;
  }
}
