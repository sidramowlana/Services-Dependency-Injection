export class AccountsService{
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

      createAccount(theName:string, theStatus:string)
      {
          //u create an object and push it into the array
          this.accounts.push({name:theName,status:theStatus});
      }

      updateStatus(id:number,theStatus:string)
      {
          this.accounts[id].status=theStatus;
      }
}