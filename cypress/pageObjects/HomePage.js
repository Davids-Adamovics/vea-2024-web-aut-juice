import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get("button#navbarAccount");
  }

  static get loginButton(){
    return cy.get("button#navbarLoginButton");
  }

  static get validateName(){
    return cy.get("[aria-label='Go to user profile']");
  }

  static get notYetCustomer() {
    return cy.get('a[routerlink="/register"][href="#/register"]');
  }
  
}
