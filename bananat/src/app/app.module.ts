import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatComponent } from './components/chat/chat.component';
import { Page404Component } from './components/page404/page404.component';


import { ChatService } from './service/chat/chat.service';
import { WebsocketService } from './service/websocket/websocket.service'
import { UsersService } from './service/users/users.service'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'page404', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ChatService,
    WebsocketService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
