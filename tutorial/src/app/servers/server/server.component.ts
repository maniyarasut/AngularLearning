import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server } from 'src/app/shared/server.model';
import { ServerService } from 'src/app/shared/serverService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
subscription:Subscription;
serverName:string;
serverStatus:string;
newServerStatus:string;
server:Server ;

  constructor(private activeRouter: ActivatedRoute,private serverService:ServerService, private route:Router) { }

  ngOnInit() {
    this.subscription=this.activeRouter.params.subscribe(
      (param:Params)=>{
        this.serverName=param['name'];
        this.serverStatus=param['status'];
        this.server = new Server(this.serverName,this.serverStatus);
      }
    );
    
  }
  startServer(serverName:String)
  {
    this.serverService.startServer(serverName);
    this.newServerStatus='RUNNING';
    alert(serverName +' has been Started');
    this.refreshNow();
  }

  stopServer(serverName:String)
  {
    this.serverService.stopServer(serverName);
    this.newServerStatus='STOPPED';
    alert(serverName +' has been Stopped');
    this.refreshNow();
  }
  terminateServer(serverName:String)
  {
    this.serverService.terminateServer(serverName);
    this.newServerStatus='TERMINATED';
    alert(serverName +' has been Terminated');
    this.refreshNow();
  }

  refreshNow()
  {
    console.log(this.activeRouter.url)
    this.route.navigate(['/servers/server',this.serverName,this.newServerStatus]);
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe;
  }

}
