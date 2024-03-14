import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {
    static get url() {
        return "/#/register";
      }

      static get registerEmailField(){
        return cy.get("#emailControl")
      }

      static get fillPasswordField(){
        return cy.get("#passwordControl")
      }

      static get repeatPassword(){
        return cy.get("#repeatPasswordControl")
      }

      static get clickSecurityQuestion(){
        return cy.get("[name='securityQuestion']")
      }

      static get clickPetQuestion() {
        return cy.get("#mat-option-9");
      }
      
      static get fillAnswerField() {
        return cy.get("#securityAnswerControl");
      }
    
      static get registerButton() {
        return cy.get("#registerButton");
      }
}