import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {by, element} from 'protractor';
import { TestBed, ComponentFixture } from '@angular/core/testing';


var username, password, loginButton;
describe('workspace-project App', () => {
	let page: AppPage;
	
	beforeEach(() => {
		page = new AppPage();
    });

	describe('Banannat App', function() {

		var usertest = {
			name: 	'test11323',
			last: 	'test2',
			email: 	'test12@gmail.com',
			pass: 	'e2etesting',
			usr:	'brianchachi2'
		},
		
   		receiver = {
			name: 	'End2End Receiver',
			last: 	'pepito',
			email: 	'e2ereceiver@netchat.com',
			pass: 	'e2etesting'
		},

    	path = require( 'path' );
    	browser.get('http://localhost:4200/');

		it('El titulo de la plataforma', function() {
			expect(browser.getTitle()).toEqual('Bananat');
		});

	
		it('Url al abrir la aplicación', function() {
			//browser.get('http://localhost:4200/login');
			expect( browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
	  	});

            
		//it ('fallo de  login',function(){
			//browser.get('http://localhost:4200/login');
			//username.sendKeys('admin');
			//password.sendKeys('fail');
			//loginButton.click().then( function(){		
				//var popup= element(by.css('.popup-container.error-popup'));
				//expect(popup.isDisplayed()).toBeTruthy();
			//});
		//});

		it ('Crear un usuario de prueba', function () {   
			browser.get('http://localhost:4200/register' );
			element( by.id( 'first_name' ) ).sendKeys(usertest.name );
			element( by.id( 'surname' ) ).sendKeys(usertest.last );
			element( by.id( 'email' ) ).sendKeys(usertest.email );
			element( by.id( 'password' ) ).sendKeys( usertest.pass );
			element( by.id( 'username' ) ).sendKeys( usertest.usr );
			element( by.buttonText( 'Registrarse' ) ).click();	
			browser.sleep(4000);
			
			expect( browser.getCurrentUrl() ).toBe( 'http://localhost:4200/login' );
	    });


		it ('Comprobar el usuario creado',function() {
			browser.get('http://localhost:4200/login');
			element( by.id( 'user_field' ) ).sendKeys(usertest.email);
			element( by.id( 'password_field' ) ).sendKeys(usertest.pass);
			element( by.buttonText( 'Iniciar Sesión' ) ).click();
			
			expect(browser.getCurrentUrl()).toBe('http://localhost:4200/chat');
		});


		it ( 'Prueba del nombre de la etiqueta nombre', function () {

			browser.get('http://localhost:4200/register' );
			var  labelName = element(by.name('name'));
			expect(labelName.getText()).toBe('');
		});

	});

	afterEach(async () => {
    // Assert that there are no errors emitted from the browser
	    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
	    expect(logs).not.toContain(jasmine.objectContaining({
	    	level: logging.Level.SEVERE,
	    } as logging.Entry));
	});
});
