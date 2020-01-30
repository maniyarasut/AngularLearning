import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { ServerService } from 'src/app/shared/serverService';
import {NgForm} from '@angular/forms';
import { Server } from 'src/app/shared/server.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrls: ['./server-add.component.css']
})
export class ServerAddComponent implements OnInit {
  serverName:string;
  serverStatus:string;
  server:Server;
@ViewChild('addServerForm',{static: false}) serverForm:NgForm;

  constructor(private serverService:ServerService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.serverName=this.serverForm.form.value['serverName'];
    this.serverStatus=this.serverForm.form.value['serverStatus'];
    this.server= new Server(this.serverName,this.serverStatus);
    this.serverService.addServer(this.server);
    alert("Server " +this.serverName +" has been added");
    console.log(this.serverService.getServer());
  }

}
