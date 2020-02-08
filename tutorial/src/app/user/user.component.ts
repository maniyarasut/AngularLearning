import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/userService';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  delImage:string='../assets/delete.png';
  editImage:string='../assets/edit.png';
  userList: User[]=[];
  constructor(private userService:UserService, private http:HttpClient,private route:Router) {
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

  ngOnInit( ) {
    
  }

  onClick(user){
    this.route.navigateByUrl('/user',{ state: user });
  }

  OnDelete(id:number)
  {
    console.log("inside Delete User");
    this.userService.deleteUser(id).subscribe(
        data=>{
          console.log(data)
        }
    );
  }

  

}
