import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({providedIn:'root'})
export class CustomEmitter
{
    private event = new Subject();
    subscribe(next,error?,complete?):Subscription{
        return this.event.subscribe(next,error,complete);
    }
    next(event) { this.event.next(event); }

}