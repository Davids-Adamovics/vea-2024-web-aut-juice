import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/address/saved-payment-methods";
  }
  static get addNewCard() {
    return cy.get(`#mat-expansion-panel-header-0`);
  }
  
  static get addName() {
    return cy.get(`#mat-input-1`);
  }
  static get addCardNumber() {
    return cy.get(`#mat-input-2`);
  }
  static get addExpiryMonth() {
    return cy.get(`#mat-input-3`);
  }
  static get addExpiryYear() {
    return cy.get(`#mat-input-4`);
  }
  
  static get clickSubmitButton() {
    return cy.get(`#submitButton`);
  }

  static get clickCardsButton() {
    return cy.get(`mat-row`);
  }

}