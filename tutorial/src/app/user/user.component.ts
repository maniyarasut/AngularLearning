import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: User[] = [ 
    new User("Max","A101"),
    new User("Anna","A102"),
    new User("Chris","A103")
  ];
  constructor() { }

  ngOnInit() {
  }

}
