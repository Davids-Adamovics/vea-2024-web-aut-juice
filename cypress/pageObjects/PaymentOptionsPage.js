import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
      }

      static get payment() {
        return cy.contains("mat-row", "************5678").parent().find('.mat-radio-button');
      }
      
      static get continueButton() {
        return cy.get(`button[aria-label="Proceed to review"]`);
      }



}