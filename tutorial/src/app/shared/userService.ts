import { Injectable } from '@angular/core';
import { NewUser } from './newUser.model';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({providedIn:'root'})
export class UserService 
{
    private usersUrl:string='http://localhost:8765/student/student';

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
        return this.http.get(this.usersUrl);
    }
    
    addUser(user:User)
    {
        console.log(user);
        return this.http.post(this.usersUrl,user);
    }

    upDateUser(user:User)
    {
        console.log(user);
        return this.http.put(this.usersUrl,user);
    }

    deleteUser(id:number)
    {
        console.log(this.usersUrl+'/'+id);
        return this.http.delete(this.usersUrl+'/'+id);
    }

}