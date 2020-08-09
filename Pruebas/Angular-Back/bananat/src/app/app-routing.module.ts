import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component'
import { RegisterComponent } from './components/register/register.component'
import { Page404Component } from './components/page404/page404.component'

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
		path: 'page404',
		component: Page404Component
	},
	{
		path: '**',
		redirectTo: 'page404',
		pathMatch: 'full',
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
