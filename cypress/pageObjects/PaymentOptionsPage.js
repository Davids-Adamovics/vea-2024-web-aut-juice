import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
      }

      static get paymentOptions() {
        return cy.get("mat-row");
      }
      
      static get continueButton() {
        return cy.get(`button[aria-label="Proceed to review"]`);
      }



}