import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './user/users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerAddComponent } from './servers/server-add/server-add.component';


const routes: Routes = [
  { path: 'users', component: UserComponent,children:[
    { path: ':id/:name', component: UsersComponent }
  ] },
   {
    path: 'servers', component: ServersComponent, children: [
      { path: 'addserver', component: ServerAddComponent },
      { path: 'server', component: ServerComponent },
      { path: 'server/:name/:status', component: ServerComponent }
    ]
  },
 
  { path: '', component: HomeComponent },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
