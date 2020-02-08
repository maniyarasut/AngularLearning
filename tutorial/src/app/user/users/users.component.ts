import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd, Params } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private id:String;
  private name:String;
  constructor(private router:Router, private activeRouter: ActivatedRoute) { } 

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params:Params)=>{
        this.id=params['id'];
        this.name=params['name'];
      }
       );
  }

  OnClickRoute()
  {
    console.log("Inside Router");
    this.router.navigate(["/users"]);
}

OnClickRoute1()
  {
  
    this.router.navigate(['/users',10,'Anna']);
}

}
