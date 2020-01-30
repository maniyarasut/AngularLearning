import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NewUser } from '../shared/newUser.model';
import { UserService } from '../shared/userService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: NewUser[]=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userList=this.userService.getAllUsers();
  }

}
