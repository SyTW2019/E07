import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {by, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  
	var username, password,loginButton;
  beforeEach(() => {
	
	 page = new AppPage();
	browser.get('http://localhost:4200/login');
	username = element(by.model('username'));
	password= element(by.model('password'));
	loginButton= element(by.buttonText('Entrar'));
       });

	describe('Banannat App', function() {
var user        = {
    name    : 'End2End Testing',
    email   : 'e2etest@netchat.com',
    pass    : 'e2etesting'
},
    receiver    = {
    name    : 'End2End Receiver',
    email   : 'e2ereceiver@netchat.com',
    pass    : 'e2etesting'
},
    path        = require( 'path' );

	 it('should have a title login', function() {
   		 browser.get('http://localhost:4200/login');
  		 expect(browser.getTitle()).toEqual('Bananat');
	 });

	it('Url al abrir la aplicación', function() {
   		browser.get('http://localhost:4200/login');
	 expect( browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
  	});


	it ('fallo de  login',function(){
		browser.get('http://localhost:4200/login');
		username.sendKeys('admin');
		password.sendKeys('fail');
		loginButton.click().then(function(){		
			var popup= element(by.css('.popup-container.error-popup'));
			expect(popup.isDisplayed()).toBeTruthy();
		});
	});

	it ('usuario creado',function() {
		 browser.get('http://localhost:4200/login');
		username.sendKeys('admin');
		password.sendKeys('admin');
		loginButton.click().then(function(){
			expect(browser.getLocationAbsUrl()).toMatch('http://localhost:4200/chat');
	});
	});

	it ( 'should create a sender user for testing purposes', function () {
        
		browser.get('http://localhost:4200/register' );

            element( by.model( 'user.name' ) ).sendKeys( user.name );
            element( by.model( 'user.email' ) ).sendKeys( user.email );
            element( by.model( 'user.pass' ) ).sendKeys( user.pass );
            element( by.css( '.btn-primary' ) ).click().then( function () {
                expect( browser.getLocationAbsUrl() ).toMatch( 'http://localhost:4200/login' );
            });
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
