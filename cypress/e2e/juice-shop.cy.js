import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      HomePage.accountButton.click();
      HomePage.loginButton.click();
      LoginPage.userEmailField.type("demo");
      LoginPage.userPasswordField.type("demo");
      LoginPage.loginButton.click();
      HomePage.accountButton.click();
      HomePage.validateName.should("have.text", " account_circle  demo  account_circle  demo ");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      HomePage.notYetCustomer.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      var randomNumberAndGmail = "email_" + Math.round(Math.random() * 100000) + "@gmail.com"
      RegistrationPage.registerEmailField.type(randomNumberAndGmail);
      // Fill in password field and repeat password field with same password
      var password = "@Password123";
      RegistrationPage.fillPasswordField.type(password);
      RegistrationPage.repeatPassword.type(password);
      // Click on Security Question menu
      RegistrationPage.clickSecurityQuestion.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.clickPetQuestion.click();
      // Fill in answer
      RegistrationPage.fillAnswerField.type("vards123");
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.userEmailField.type(randomNumberAndGmail);
      // Set password value to previously used password value
      LoginPage.userPasswordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.validateName.should("have.text", ` account_circle  ${randomNumberAndGmail}  account_circle  ${randomNumberAndGmail} `);

    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchText.type("Lemon");
      HomePage.searchText.type("{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.clickLemonCard.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.validateDescription.should('exist').and('have.text', 'Sour but full of vitamins.');

    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchText.type("500ml");
      HomePage.searchText.type("{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.clickLemonCard1.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.validateDescription.should('exist').and('have.text', 'Sour but full of vitamins.');
    });
    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchText.type("500ml");
      HomePage.searchText.type("{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.clickEggFruitCard.click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.validateDescriptionEggfruit.should('exist').and('have.text', 'Now with even more exotic flavour.');
      // Close the card
      HomePage.closeCard.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.clickLemonCard.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.validateDescriptionLemon.should('exist').and('have.text', 'Sour but full of vitamins.');
      // Close the card
      HomePage.closeCard.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.clickStrawberryCard.click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.validateStrawberryCard.should('exist').and('have.text', 'Sweet & tasty!');
    });

    // Create scenario - Read a review
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchText.type("King");
      HomePage.searchText.type("{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.clickKingOfTheHillCard.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.clickReviews.click();
      cy.wait(1000); // wait 
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.validateReview.should('exist').and('have.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
    });

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchText.type("Raspberry");
      HomePage.searchText.type("{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.clickRaspberryCard.click();
      // Type in review - "Tastes like metal"
      HomePage.writeAreview.type("Tastes like metal");
      // Click Submit
      HomePage.submitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.clickReviews.click();
      cy.wait(1000); // wait 
      // Validate review -  "Tastes like metal"
      HomePage.validateReviewTastesLikeMEtal.should('exist').and('have.text', 'Tastes like metal');
    });

    
    // Create scenario - Validate product card amount
    it.only("Validate product card amount", () => {
    HomePage.productCardAmount12.should('exist').and('have.text', '12');
    // Validate that the default amount of cards is 12
    HomePage.productCardAmount12.click();
    // Change items per page (at the bottom of page) to 24
    HomePage.select24products.click();
    // Validate that the amount of cards is 24
    HomePage.productCardAmount24.should('exist').and('have.text', '24');
    // Change items per page (at the bottom of page) to 36
    HomePage.productCardAmount24.click();
    HomePage.select36products.click();
    // Validate that the amount of cards is 35
    HomePage.productCardAmount36.should('exist').and('have.text', '36');
  });

    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    // Search for Girlie
    // Add to basket "Girlie"
    // Click on "Your Basket" button
    // Create page object - BasketPage
    // Click on "Checkout" button
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list

  });
});
