import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }

  static get addcountry() {
    return cy.get(`#mat-input-1`);
  }
  static get addName() {
    return cy.get(`#mat-input-2`);
  }
  static get addMobileNumber() {
    return cy.get(`#mat-input-3`);
  }
  static get addZipCode() {
    return cy.get(`#mat-input-4`);
  }
  static get addAddress() {
    return cy.get(`#address`);
  }
  static get addCity() {
    return cy.get(`#mat-input-6`);
  }
  static get addState() {
    return cy.get(`#mat-input-7`);
  }
  
  static get clickSubmitButton() {
    return cy.get(`#submitButton`);
  }
  
}