import MainPage from '../page_objects/MainPage'
import ProductPage from '../page_objects/ProductPage'

const mainPage = new MainPage()
const productPage = new ProductPage()

describe('logout functionality check', () => { 
  it('Should login into account', () => {
    cy.visit('https://www.saucedemo.com/');
    mainPage.loginFieldFill("standard_user");
    mainPage.passwordFieldFill("secret_sauce");
    mainPage.loginButton();
    cy.wait(2000)
    })

  it('Should logout from account', () => {
   productPage.burgerButton();
    productPage.logoutButton();
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.wait(2000)
    })
  })