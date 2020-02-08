import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/userService';
import { NewUser } from 'src/app/shared/newUser.model';
import { User } from 'src/app/shared/user.model';
import { Address } from 'src/app/shared/address';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
userForm: FormGroup;
genders:string[]=["Male","Female","Others"];
  constructor(private userService:UserService,public datepipe: DatePipe) { }

  ngOnInit() {
    this.userForm= new FormGroup({
      'userName': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'dob': new FormControl(null,[Validators.required]),
      'address': new FormGroup({
        'streetName': new FormControl(null),
        'city': new FormControl(null),
        'country': new FormControl('India',[Validators.required]),
        'zipcode': new FormControl(null,[Validators.required])
      })
    });
  }

  onSubmit()
  {
    let bdate=this.datepipe.transform(this.userForm.controls['dob'].value.toLocaleDateString(),'yyyy-MM-dd');
    let address = new Address(null,this.userForm.controls['address'].value.streetName,this.userForm.controls['address'].value.country,+this.userForm.controls['address'].value.zipcode,this.userForm.controls['address'].value.city);
    let user = new User(String(this.userForm.controls['userName'].value),null,String(this.userForm.controls['email'].value),String(bdate),address);
   this.userService.addUser(user).subscribe(
      data=>console.log(data)
    )
    this.userForm.reset();
  }

}
