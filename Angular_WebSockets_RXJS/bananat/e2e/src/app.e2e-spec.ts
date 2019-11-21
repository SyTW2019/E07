import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


	describe('Banannat App', function() {

  it('should have a title login', function() {
    browser.get('http://localhost:4200/login');
    expect(browser.getTitle()).toEqual('Bananat');
  });

    it('Url al abrir la aplicación', function() {
    browser.get('http://localhost:4200/login');
    expect( browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
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
