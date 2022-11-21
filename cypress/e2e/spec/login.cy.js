import MainPage from '../page_objects/MainPage'

const mainPage = new MainPage()

describe('test suite for login functionality', () => { 
  it('Should open website, fill login form with valid credentials and login into account', () => {
  cy.visit('https://www.saucedemo.com/');
  mainPage.loginFieldFill("standard_user");
  mainPage.passwordFieldFill("secret_sauce");
  mainPage.loginButton();
  cy.wait(2000);
  })

  it('Should open website, fill login form with invalid credentials and get error', () => {
    cy.visit('https://www.saucedemo.com/');
    mainPage.loginFieldFill("abc");
    mainPage.passwordFieldFill("123");
    mainPage.loginButton();
    cy.wait(2000);
    mainPage.loginError();
    })
})