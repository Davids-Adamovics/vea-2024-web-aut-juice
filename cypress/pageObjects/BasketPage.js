import { BasePage } from "./basePage";

export class BasketPage extends BasePage {
    static get url() {
        return "/#/basket";
      }

    static get checkoutButton(){
        return cy.get("button#checkoutButton");
    }


}