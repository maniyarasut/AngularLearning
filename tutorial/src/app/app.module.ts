import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerAddComponent } from './servers/server-add/server-add.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './user/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerService } from './shared/serverService';
import { CreateUserComponent } from './user/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServersComponent,
    ServerComponent,
    HomeComponent,
    PageNotFoundComponent,
    ServerAddComponent,
    UserComponent,
    UsersComponent,
    CreateUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
