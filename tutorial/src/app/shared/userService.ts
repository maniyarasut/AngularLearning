import { Injectable } from '@angular/core';
import { NewUser } from './newUser.model';

@Injectable({providedIn:'root'})
export class UserService 
{
    usersList:NewUser[]=[ 
        new NewUser("Max","max@max.com","Male"),
        new NewUser("Anna","anna@anna.com","Female"),
        new NewUser("Chris","chris@chris.com","Male")
      ];
     getAllUsers()
    {
        return this.usersList;
    }
    
    addUser(user:NewUser)
    {
        this.usersList.push(user);
    }

}