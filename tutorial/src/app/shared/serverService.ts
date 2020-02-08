import { Server } from './server.model';
import { Injectable,EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class ServerService {
       serversList: Server[] = [
            
        new Server("Production Server", "RUNNING"),
        new Server("Dev Server", "STOPPED"),
        new Server("Test Server", "TERMINATED")

    ];

    ngOnInit()
    {
    }
   

    getServer()
    {
        return this.serversList;
    }

    addServer(server:Server)
    {
        console.log(this.serversList.length)
        console.log(this.serversList.push(server));
    }

    stopServer(serverNm:String)
    {
        this.serversList.forEach(function(server){
            if(server.serverName===serverNm)
            {
                console.log(server.serverStatus);
                server.serverStatus='STOPPED';
                console.log(server.serverStatus);
            }

        })
       
    }

    startServer(serverNm:String)
    {
        this.serversList.forEach(function(server){
            if(server.serverName===serverNm)
            {
                console.log(server.serverStatus);
                server.serverStatus='RUNNING';
                console.log(server.serverStatus);
            }

        })
       
    }
    terminateServer(serverNm:String)
    {
        this.serversList.forEach(function(server){
            if(server.serverName===serverNm)
            {
                console.log(server.serverStatus);
                server.serverStatus='TERMINATED';
                console.log(server.serverStatus);
            }

        })
       
    }


}