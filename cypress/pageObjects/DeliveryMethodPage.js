import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "/#/delivery-method";
      }

      static get deliverySpeed() {
        return cy.get("mat-row").find(':contains("Standard Delivery")');
      }
      
      static get continueButton() {
        return cy.get(`button[aria-label="Proceed to delivery method selection"]`);
      }

}