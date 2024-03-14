import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get userEmailField(){
    return cy.get("input[id='email']");
  }

  static get userPasswordField(){
    return cy.get("input[id='password']");
  }

  static get loginButton(){
    return cy.get("button#loginButton")
  }
}
