import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage {
    static get url() {
        return "/#/address/select";
      }
      static get radioButton() {
        return cy.get("mat-row");

      }
      
      static get continueButton() {
        return cy.get(`[aria-label="Proceed to payment selection"]`);
      }

}