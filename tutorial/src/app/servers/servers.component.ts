import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Server } from '../shared/server.model';
import { ServerService } from '../shared/serverService';
import {  Subscription } from 'rxjs';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers:[ServerService]
})
export class ServersComponent implements OnInit {
serversList: Server[]=[];
  constructor(private serverService:ServerService ) {}

  ngOnInit() {
    console.log("Inside OnInIt");
    this.serversList=this.serverService.getServer();  
  }
  
}
