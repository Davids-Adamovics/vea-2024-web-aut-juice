import { BasePage } from "../pageObjects/basePage";

export class OrderSummaryPage extends BasePage {
  static get url() {
    return "/#/order-summary";
  }

  static get placeOrder() {
    return cy.get("[aria-label='Complete your purchase']");
  }
  
  static get checkoutButton() {
    return cy.get(`button#checkoutButton`);
  }

}