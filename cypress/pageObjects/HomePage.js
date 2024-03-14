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
  

  // ======== search Lemon======== 
  static get searchIcon(){
    return cy.get("#searchQuery");
  }

  static get searchText(){
    return cy.get("#mat-input-0");
  }

  
  static get validateDescriptionLemon(){
    return cy.contains('div', 'Sour but full of vitamins.');
  }
 
    // ======== search and click Lemon======== 
  static get clickLemonCard(){
    return cy.contains('div', ' Lemon Juice (500ml) ');
  }

    // ======== Search 500ml and validate cards ======== 
  static get clickEggFruitCard(){
    return cy.contains('div', ' Eggfruit Juice (500ml) ');
  }

  static get validateDescriptionEggfruit(){
    return cy.contains('div', 'Now with even more exotic flavour.');
  }

  static get closeCard(){
    return cy.get("[aria-label='Close Dialog']");
  }

  static get clickStrawberryCard(){
    return cy.contains('div', ' Strawberry Juice (500ml) ');
  }

  static get validateStrawberryCard(){
    return cy.contains('div', 'Sweet & tasty!');
  }

    // ======== Read a review ======== 
    static get clickKingOfTheHillCard(){
      return cy.contains('div', 'OWASP Juice Shop "King of the Hill" Facemask');
    }

    static get clickReviews(){
      return cy.get("[aria-label='Expand for Reviews']");
    }

    static get validateReview(){
      return cy.contains('p', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
    }
}
