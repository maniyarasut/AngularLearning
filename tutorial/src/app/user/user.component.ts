import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/userService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: User[]=[];
  constructor(private userService:UserService, private http:HttpClient) { }

  ngOnInit( ) {
    this.userService.getAllUsers().subscribe(
      (data: User[]) =>{
        let tempusers:any[]=[];
        data.forEach(function(user)
        {  tempusers.push(user);}
        )
        this.userList=tempusers;
      }
    )
    
  }

}
