import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {
    static get url() {
        return "/#/register";
      }

      static get registerEmailField(){
        return cy.get("input[id='emailControl']")
      }

      static get 
}