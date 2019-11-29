import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component'
import { RegisterComponent } from './components/register/register.component'



const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'chat',
		component: ChatComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: '**',
		redirectTo: 'login',
		pathMatch: 'full',
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
