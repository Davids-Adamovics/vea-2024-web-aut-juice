import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  // ======== login ======== 
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

  // ======== register ======== 
  static get notYetCustomer() {
    return cy.get('a[routerlink="/register"][href="#/register"]');
  }
  

  // ======== search ======== 
  static get searchIcon(){
    return cy.get("#searchQuery");
  }

  static get searchText(){
    return cy.get("#mat-input-0");
  }

  static get clickLemonCard() {
    return cy.get("[aria-label='Click for more information about the product']");
  }
  
  static get validateDescription(){
    return cy.contains('div', 'Sour but full of vitamins.');
  }


}
