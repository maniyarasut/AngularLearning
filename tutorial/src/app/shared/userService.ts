import { Injectable } from '@angular/core';
import { NewUser } from './newUser.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class UserService 
{
    private getUsersUrl:string='http://localhost:8765/student/student';

    constructor(private http:HttpClient)
    {

    }
    usersList:NewUser[]=[ 
        new NewUser("Max","max@max.com","Male"),
        new NewUser("Anna","anna@anna.com","Female"),
        new NewUser("Chris","chris@chris.com","Male")
      ];
     getAllUsers()
    {
        return this.http.get(this.getUsersUrl);
    }
    
    addUser(user:NewUser)
    {
        this.usersList.push(user);
    }

}