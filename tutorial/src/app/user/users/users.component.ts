import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd, Params } from '@angular/router';
import { User } from 'src/app/shared/user.model';
import { map } from 'rxjs/operators';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { DatePipe } from '@angular/common'
import { Address } from 'src/app/shared/address';
import { UserService } from 'src/app/shared/userService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private isDisabled:boolean=true;
  private name: string;
  private id: string;
  private user: User;
  editForm: FormGroup;
  tempForm:FormGroup;
  dateValue:string;
  constructor(private userService:UserService, public datepipe: DatePipe,private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.isDisabled=true;
  }

  ngOnInit() {
    this.user = history.state;
    this.editForm = this.formBuilder.group(
      {
        id:[this.user.id,Validators.required],
        name:[this.user.name,Validators.required],
        email:[this.user.email,Validators.required],
        dateOfBirth:[this.datepipe.transform(this.user.dateOfBirth,'MM/dd/yyyy'),Validators.required],
        address: this.formBuilder.group({
          streetName:[this.user.address.streetName],
          country:[this.user.address.country,Validators.required],
          zipcode:[this.user.address.zipcode,Validators.required],
          city:[this.user.address.city]
        })


      }
    );
    this.tempForm=this.editForm;
  }

  OnEdit()
  {
    this.isDisabled=false;
  }

  onClear()
  {
    console.log(this.tempForm.value)
    this.editForm.reset();
    this.ngOnInit();

  }
  editUser()
  {
   
    this.isDisabled=true;
    this.editForm.value['dateOfBirth']=this.datepipe.transform(this.editForm.value['dateOfBirth'],'yyyy-MM-dd');
   this.userService.upDateUser(this.editForm.value).subscribe(
      data=>console.log(data)
    )
    this.router.navigate(['/users']);
  }

  OnDelete(id:number)
  {
    console.log("inside Delete User");
    this.userService.deleteUser(id).subscribe(
        data=>{
          console.log(data)
        }
    );
    this.router.navigateByUrl('/users');
  }


}
