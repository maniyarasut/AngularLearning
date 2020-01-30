import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/userService';
import { NewUser } from 'src/app/shared/newUser.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
userForm: FormGroup;
genders:string[]=["Male","Female","Others"];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userForm= new FormGroup({
      'userName': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('Male')
    });
  }

  onSubmit()
  {
    this.userService.addUser(new NewUser(this.userForm.value['userName'],this.userForm.value['email'],this.userForm.value['userNgenderame']));
    this.userForm.reset();
  }

}