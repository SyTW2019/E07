import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {by, element} from 'protractor';

describe('workspace-project App', () => {

	beforeEach(() => {
		new AppPage();
    });

	let usertest = {
        name:   'Manolo',
        last:   'Cool',
        email:  'manolocool@gmail.com',
        pass:   'manolo',
        username: 'Manolo'
    }
    /*let receiver = {
        name:   'End2End Receiver',
        last:   'pepito',
        email:  'e2ereceiver@netchat.com',
        pass:   'e2etesting',
        username: 'receiver'
    }*/

    browser.get('http://localhost:4200/');

	describe('Test básicos', function() {
        it('El titulo de la plataforma', function() {
            expect(browser.getTitle()).toEqual('Bananat');
        });

		it('Url al abrir la aplicación', function() {
			expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
	  	});

		it ( 'Prueba del nombre de la etiqueta nombre', function () {
            browser.get('http://localhost:4200/register' );
            let labelName = element(by.name('name'));
            expect(labelName.getText()).toBe('');
        });
	});

    describe('Test formulario de inicio de sesión', function() {
        browser.get('http://localhost:4200/');

        it('Comprobar el encabezado h1 de la pagina login',function(){
            browser.get('http://localhost:4200/login');
            let h1element = element(by.css('.appName'));
            expect(h1element.getText()).toBe('BANANAT');
        });

	    it('La existencia de un formulario de login',function(){
            browser.get('http://localhost:4200/login');
            let formulario = element(by.id('userForm'));
            expect(formulario.isPresent()).toBe(true);
        });

        it('La existencia de un campo email',function(){
            browser.get('http://localhost:4200/login');
            let em = element(by.id('user_field'));
            expect(em.isPresent()).toBe(true);
        });

        it('La existencia de un campo contraseña',function(){
            browser.get('http://localhost:4200/login');
            let pw = element(by.id('password_field'));
            expect(pw.isPresent()).toBe(true);
        });

        it('Boton de loguearse',function(){
            browser.get('http://localhost:4200/login');
            let btn = element(by.name('Login'));
            expect(btn.isPresent()).toBe(true);
            expect(btn.getText()).toBe('INICIAR SESIÓN');
        });

        it('Redirección a registro',function(){
            browser.get('http://localhost:4200/login');
            let cuenta = element(by.id('registerOption'));
            expect(cuenta.isPresent()).toBe(true);
            expect(element(by.linkText('¿No tiene cuenta aún? Regístrese')).getTagName()).toBe('a');
            element(by.linkText('¿No tiene cuenta aún? Regístrese')).click();
            browser.sleep(4000);
            expect( browser.getCurrentUrl() ).toBe( 'http://localhost:4200/register' );
        });


	});

	describe('Test formulario de Registro', function() {
        it('Comprobar el encabezado h1 de la pagina register',function(){
            browser.get('http://localhost:4200/register');
            let h1element = element(by.css('.appName'));
            expect(h1element.getText()).toBe('BANANAT');
        });

		it('La existencia de un formulario de register',function(){
            browser.get('http://localhost:4200/register');
            let formulario = element(by.css('.register .formulario'));
            expect(formulario.isPresent()).toBe(true);
        });

		it('La existencia de un campo nombre',function(){
            browser.get('http://localhost:4200/register');
            let nom = element(by.id('first_name'));
            expect(nom.isPresent()).toBe(true);
        });

		it('La existencia de un campo apellidos',function(){
            browser.get('http://localhost:4200/register');
            let ape = element(by.id('surname'));
            expect(ape.isPresent()).toBe(true);
        });

		it('La existencia de un campo email',function(){
            browser.get('http://localhost:4200/register');
            let em = element(by.id('email'));
            expect(em.isPresent()).toBe(true);
        });

        it('La existencia de un campo contraseña',function(){
            browser.get('http://localhost:4200/register');
            let pw = element(by.id('password'));
            expect(pw.isPresent()).toBe(true);
		});

		it('La existencia de un campo Nombre de usuario',function(){
            browser.get('http://localhost:4200/register');
            let nu = element(by.id('username'));
            expect(nu.isPresent()).toBe(true);
        });

		it('Boton de registrarse',function(){
            browser.get('http://localhost:4200/register');
            let btn = element(by.name('action'));
            expect(btn.isPresent()).toBe(true);
        });

		it('Boton de registrarse mediante google',function(){
            browser.get('http://localhost:4200/register');
            let btnG = element(by.css('.googleRegister'));
            expect(btnG.isPresent()).toBe(true);
            expect(btnG.getText()).toBe('Google');
        });

		it('Boton de registrarse mediante Facebook',function(){
            browser.get('http://localhost:4200/register');
            let btnF = element(by.css('.facebookRegister'));
            expect(btnF.isPresent()).toBe(true);
            expect(btnF.getText()).toBe('Facebook');
        });
	});

	describe('Test para incluir iconos en cada campo', function() {
    	it('Icono de usuario en login',function(){
            browser.get('http://localhost:4200/login');
            let icp = element(by.id('il-mensaje'));
			expect(icp.isPresent()).toBe(true);
        });

		it('Icono de password en login',function(){
            browser.get('http://localhost:4200/login');
            let icc = element(by.id('il-candado'));
            expect(icc.isPresent()).toBe(true);
        });

		it('Icono de usuario en register',function(){
            browser.get('http://localhost:4200/register');
            let icpe = element(by.id('ir-persona'));
            expect(icpe.isPresent()).toBe(true);
        });

		it('Icono de password en register',function(){
            browser.get('http://localhost:4200/register');
            let icpass = element(by.id('ir-candado'));
            expect(icpass.isPresent()).toBe(true);
        });

		it('Icono de correo en register',function(){
            browser.get('http://localhost:4200/register');
            let iccor = element(by.id('ir-mensaje'));
            expect(iccor.isPresent()).toBe(true);
        });

		it('Icono de Nombre de usuario  en register',function(){
            browser.get('http://localhost:4200/register');
            let icnu = element(by.id('ir-nu'));
            expect(icnu.isPresent()).toBe(true);
        });

		it('Icono de google en register',function(){
            browser.get('http://localhost:4200/register');
            let icG = element(by.css('.GIcon'));
            expect(icG.isPresent()).toBe(true);
        });

		it('Icono de facebook  en register',function(){
            browser.get('http://localhost:4200/register');
            let icF = element(by.css('.fbIcon'));
            expect(icF.isPresent()).toBe(true);
        });
	});

	describe('Test de registro e inicio de sesión', function() {
/*
                it ('fallo de  login',function(){
                        browser.get('http://localhost:4200/login');
                        username.sendKeys('admin');
                        password.sendKeys('fail');
                        loginButton.click().then( function(){
                                let popup= element(by.css('.popup-container.error-popup'));
                                expect(popup.isDisplayed()).toBeTruthy();
                        });
                });
*/
        it ('Crear un usuario de prueba', function () {
            browser.get('http://localhost:4200/register' );
            element( by.id( 'first_name' ) ).sendKeys(usertest.name );
            element( by.id( 'surname' ) ).sendKeys(usertest.last );
            element( by.id( 'password' ) ).sendKeys( usertest.pass );
            element( by.id( 'email' ) ).sendKeys(usertest.email );
            element( by.id( 'username') ).sendKeys( usertest.username );
            element( by.buttonText( 'Registrarse' ) ).click();
            browser.sleep(2000);
            expect( browser.getCurrentUrl() ).toBe( 'http://localhost:4200/login' );
        });


        it ('Comprobar el usuario creado',function() {
            browser.get('http://localhost:4200/login');
            element( by.id( 'user_field' ) ).sendKeys(usertest.email);
            element( by.id( 'password_field' ) ).sendKeys(usertest.pass);
            element( by.buttonText( 'Iniciar Sesión' ) ).click();
            browser.sleep(5000);
            expect(browser.getCurrentUrl()).toBe('http://localhost:4200/chat');
            expect(element(by.name('Logout')).isPresent()).toBe(true);
            element(by.name('Logout')).click();
            browser.sleep(4000);
            expect( browser.getCurrentUrl() ).toBe( 'http://localhost:4200/login' );
        });

                //it ('Borrar un usuario', function () {
                       //db.removeUser(usertest.usr);
                // });

                //it ('Comprobar el usuario borrado',function() {
               // browser.get('http://localhost:4200/login');
		//element( by.id( 'user_field' ) ).sendKeys(usertest.email);
                //element( by.id( 'password_field' ) ).sendKeys(usertest.pass);
                //element( by.buttonText( 'Iniciar Sesión' ) ).click();

                //expect(browser.getCurrentUrl()).toBe('http://localhost:4200/chat');
        // });
    });

	describe('Test de la página chat', function(){
		it ('Cerrar usuario tras iniciar sesión',function() {
            browser.get('http://localhost:4200/login');
            browser.sleep(4000);
            element( by.id( 'user_field' ) ).sendKeys(usertest.email);
            element( by.id( 'password_field' ) ).sendKeys(usertest.pass);
            element( by.buttonText( 'Iniciar Sesión' ) ).click();
            browser.sleep(4000);
            expect(browser.getCurrentUrl()).toBe('http://localhost:4200/chat');
            let lOut = element(by.css('.logout'));
            expect(lOut.isPresent()).toBe(true);
            expect(element(by.name('Logout')).isPresent()).toBe(true);
            element(by.name('Logout')).click();
            browser.sleep(4000);
            expect( browser.getCurrentUrl() ).toBe( 'http://localhost:4200/login' );
        });
/*
       		it('Cerrar sesión',function(){
            browser.get('http://localhost:4200/chat');
            let lOut = element(by.css('.logout'));
            expect(lOut.isPresent()).toBe(true);
        });

		it('Funcionamiento de Boton de cerrar sesión',function(){
            browser.get('http://localhost:4200/chat');
            expect(element(by.name('Logout')).isPresent()).toBe(true);
	    element(by.name('Logout')).click();
            browser.sleep(4000);
            expect( browser.getCurrentUrl() ).toBe( 'http://localhost:4200/login' );
        });

*/
	});

	afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
	});
});
