import { AppPage } from './app.po';
import { browser, logging, $ } from 'protractor';
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
    let receiver = {
        name:   'Pepe',
        last:   'pepe',
        email:  'pepe@gmail.com',
        pass:   'pepe',
        username: 'Pepe'
    }

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

        it ('Crear otro usuario para la interaccion de mensajes', function () {
            browser.get('http://localhost:4200/register' );
            element( by.id( 'first_name' ) ).sendKeys(receiver.email );
            element( by.id( 'surname' ) ).sendKeys(receiver.last );
            element( by.id( 'password' ) ).sendKeys( receiver.pass );
            element( by.id( 'email' ) ).sendKeys(receiver.email );
            element( by.id( 'username') ).sendKeys( receiver.username );
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

        it('Funcionamiento de Boton de cerrar sesión',function(){
            browser.get('http://localhost:4200/chat');
            expect(element(by.name('Logout')).isPresent()).toBe(true);
	         element(by.name('Logout')).click();
            browser.sleep(4000);
            expect( browser.getCurrentUrl() ).toBe( 'http://localhost:4200/login' );
        });

		it ('Cerrar usuario tras iniciar sesión',function() {
            browser.get('http://localhost:4200/login');
            element( by.id( 'user_field' ) ).sendKeys(usertest.email);
            element( by.id( 'password_field' ) ).sendKeys(usertest.pass);
            element( by.buttonText( 'Iniciar Sesión' ) ).click();
            browser.sleep(1000);
            expect(browser.getCurrentUrl()).toBe('http://localhost:4200/chat');
            let lOut = element(by.css('.logout'));
            expect(lOut.isPresent()).toBe(true);
            expect(element(by.name('Logout')).isPresent()).toBe(true);
            element(by.name('Logout')).click();
            browser.sleep(1000);
            expect( browser.getCurrentUrl() ).toBe( 'http://localhost:4200/login' );
        });


		it('NO se puede cerrar sesión,sin haber iniciado previamente',function(){
            browser.get('http://localhost:4200/chat');
            expect(element(by.name('Logout')).isPresent()).toBe(false);
            browser.sleep(2000)
            expect( browser.getCurrentUrl() ).toBe( 'http://localhost:4200/login' );
        });

        it('Que aparezca el nombre del usuario en su chat cuando inicia sesión',function(){
            browser.get('http://localhost:4200/login');
            element( by.id( 'user_field' ) ).sendKeys(usertest.email);
            element( by.id( 'password_field' ) ).sendKeys(usertest.pass);
            element( by.buttonText( 'Iniciar Sesión' ) ).click();
            browser.sleep(1000);
            expect(browser.getCurrentUrl()).toBe('http://localhost:4200/chat');
            expect(element(by.id('chatName')).isPresent()).toBe(true);
            expect(element(by.id('chatName')).getText()).toEqual(usertest.name + ' ' + usertest.last);
        });

        it('Exista una pantalla de intercambio de mensajes',function(){
            browser.get('http://localhost:4200/chat');
            expect(element(by.id('messageArea')).isPresent()).toBe(true);
        });

        it('Exista una imagen de perfil en su chat y unos parametros css especificos',function(){
            browser.get('http://localhost:4200/chat');
            expect(element(by.id('chatImage')).isPresent()).toBe(true);
            expect($('#chatImage').getCssValue('background')).toEqual('rgba(0, 0, 0, 0) url("http://s3.amazonaws.com/37assets/svn/765-default-avatar.png") no-repeat scroll 50% 50% / cover padding-box border-box');
        });

        it('Que exista un campo de mensaje y un boton de envio',function(){
            browser.get('http://localhost:4200/chat');
            expect(element(by.id('chatMessageBar')).isPresent()).toBe(true);
        });

        it('Presencia y Funcionamiento de un campo de mensaje',function(){
            browser.get('http://localhost:4200/chat');
            expect(element(by.id('boxMessage')).isPresent()).toBe(true);
            expect(element(by.id('message')).sendKeys('Hola me llamo manolo'));
            browser.sleep(100);
            expect(element(by.id('message')).getText()).toEqual('Hola me llamo manolo');
        });

        it('Existencia de un boton que envie el mensaje',function(){
            //browser.get('http://localhost:4200/chat');
            expect(element(by.id('boxMessage')).isPresent()).toBe(true);
        });

        it('Existencia de un historial de mensajes',function(){
            //browser.get('http://localhost:4200/chat');
            browser.sleep(2000);
            expect(element(by.id('chatHistory')).isPresent()).toBe(true);
        });

        it('Funcionamiento del boton de enviar mensaje',function(){
            //browser.get('http://localhost:4200/chat');
            expect(element(by.id('sendButton')).isPresent()).toBe(true);
            element( by.id( 'sendButton' ) ).click();
            browser.sleep(100);
        });

        it('Funcionamiento del historial de mensajes',function(){
            var texto = element(by.css('.sent'));
            expect(texto.getText()).toEqual('Hola me llamo manolo')
        });

        it('Enviar un mensaje y comprobar que aparece en el historial',function(){
            expect(element(by.id('message')).sendKeys('Tengo mucho calor'));
            element( by.id( 'sendButton' ) ).click();
            var list = element.all(by.css('.sent'));
            expect(list.count()).toBe(2);
        });

        it('comprobar que no se ha recibido ninguna respuesta',function(){
            var resp = element.all(by.css('.replies'));
            expect(resp.count()).toBe(0);
        });

        it('Enviar una respuesta con otro usuario',async function(){
            const ffBrowser = await browser.forkNewDriverInstance(true,true).ready;
            (await ffBrowser.getProcessedConfig()).capabilities = {'browserName': 'firefox' };
            var element2 = ffBrowser.element;

            ffBrowser.get('http://localhost:4200/login'); 
            element2( by.id( 'user_field' ) ).sendKeys(receiver.email);
            element2( by.id( 'password_field' ) ).sendKeys(receiver.pass);
            element2( by.buttonText( 'Iniciar Sesión' ) ).click();
            ffBrowser.sleep(200);
            expect(ffBrowser.getCurrentUrl()).toBe('http://localhost:4200/chat');
            expect(element2(by.id('message')).sendKeys('Te estoy respondiendo'));
            element2( by.id( 'sendButton' ) ).click();
            ffBrowser.sleep(2000);
        });

        it('comprobar que se ha recibido una respuesta en el usuario principal',function(){
            var resp1 = element.all(by.css('.replies'));
            expect(resp1.count()).toBe(1);
        });

        it('Examinar que el texto recibido concuerda con lo enviado',function(){
            var texto = element(by.css('.replies'));
            expect(texto.getText()).toEqual('Te estoy respondiendo')
        });

        it('Enviar un mensaje a la cuenta secundaria',function(){
            expect(element(by.id('message')).sendKeys('Muchas gracias'));
            element( by.id( 'sendButton' ) ).click();
        });

	});

	afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
	});
});
