import {search} from '../support/helper';

describe('test1', () => {
  
  it('successfully registration', () => {
    cy.log('successfully registration');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
    cy.get('[aria-label="Close Welcome Banner"]').click();

    const email = `testuser${Math.floor(Math.random() * 100000)}@example.com`;
    const password = `testpassword${Math.floor(Math.random() * 100000)}`;
    const securityAnswer = `Answer${Math.floor(Math.random() * 100000)}`;

    cy.get('#emailControl').type(email);
    cy.get('#passwordControl').type(password);
    cy.get('#repeatPasswordControl').type(password)

    const randomSecurityQuestionIndex = Math.floor(Math.random() * 3); // Adjust the number based on the number of options
    cy.get('#mat-select-0').click();
    cy.get('.mat-option').eq(randomSecurityQuestionIndex).click();

    cy.get('#securityAnswerControl').type(securityAnswer);

    // Submit the registration form
    cy.get('#registerButton').click();

    // Assert that the registration was successful (replace with your actual success criteria)
    cy.url().should('include', '/login'); // Check if the URL includes the success page URL
    cy.get('.ng-tns-c70-15 .mat-simple-snack-bar-content ').should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); // Replace with the actual success message or element
  

  })
})


describe('test2', () => {
  
  it('Unsuccessfully registration', () => {
    cy.log('Unsuccessfully registration');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
    cy.get('[aria-label="Close Welcome Banner"]').click();
    
        // Fill in the registration form with invalid data
        cy.get('#emailControl').type('invalidemail'); 
        cy.get('#passwordControl').type('123'); 
        cy.get('#repeatPasswordControl').type('mismatched'); 
    
        // Choose a security question (adjust the index based on your options)
        cy.get('#mat-select-0').click();
        cy.get('.mat-option').eq(0).click();
    
        // Fill in the security answer
        cy.get('#securityAnswerControl').type('answer');
    
        cy.get('#mat-error-5').contains('Email address is not valid.');
        cy.get('#mat-error-6').contains('Password must be 5-40 characters long.');
        cy.get('#mat-error-7').contains('Passwords do not match');

        // Assert that the registration button is disabled
        cy.get('#registerButton').should('be.disabled');


      });
    });
    

describe('test3', () => {
  
  it('successfully registration', () => {
    cy.log('successfully login');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
    cy.get('[aria-label="Close Welcome Banner"]').click();

    const email = `testuser${Math.floor(Math.random() * 100000)}@example.com`;
    const password = `testpassword${Math.floor(Math.random() * 100000)}`;
    const securityAnswer = `Answer${Math.floor(Math.random() * 100000)}`;

    cy.get('#emailControl').type(email);
    cy.get('#passwordControl').type(password);
    cy.get('#repeatPasswordControl').type(password)

    const randomSecurityQuestionIndex = Math.floor(Math.random() * 3); // Adjust the number based on the number of options
    cy.get('#mat-select-0').click();
    cy.get('.mat-option').eq(randomSecurityQuestionIndex).click();

    cy.get('#securityAnswerControl').type(securityAnswer);

    // Submit the registration form
    cy.get('#registerButton').click();

    // Assert that the registration was successful (replace with your actual success criteria)
    cy.url().should('include', '/login'); // Check if the URL includes the success page URL
    cy.get('.ng-tns-c70-15 .mat-simple-snack-bar-content ').should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); // Replace with the actual success message or element

    // You can add more assertions based on your application's behavior

    Cypress.env('email', email);
    Cypress.env('password', password);
    
  });

  it('successfull login', () => {
    //Посетите страницу входа
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
    cy.get('[aria-label="Close Welcome Banner"]').click();

    // Используйте электронную почту и пароль из предыдущего теста
    const email = Cypress.env('email'); // Получаем электронную почту из переменной окружения
    const password = Cypress.env('password'); // Получаем пароль из переменной окружения

    // Введите электронную почту и пароль
    cy.get('#email').type(email);
    cy.get('#password').type(password);

    // Нажмите кнопку "Log in"
    cy.get('#loginButton').click();

    // Проверьте, что вы успешно вошли, например, проверив изменение URL
    cy.url().should('include', '/search');

    // Или проверьте видимость элемента, который появляется после успешной логинизации
    cy.get('.heading.mat-elevation-z6 ').should('be.visible').should('have.text','All Products');

    cy.get('#navbarAccount').click();
    cy.get('#navbarLogoutButton').click();
  });
});


describe('test4', () => {

  it('Unsuccessfull login', () => {
    cy.log('Unsuccessfully login');
    // Посетите страницу входа
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
    cy.get('[aria-label="Close Welcome Banner"]').click();

    // Введите электронную почту и пароль
    cy.get('#email').type('example');
    cy.get('#password').type('123');

    // Нажмите кнопку "Log in"
    cy.get('#loginButton').click();

    cy.get('.error.ng-star-inserted').contains('Invalid email or password.');

    cy.get('#loginButton').should('not.be.disabled');
    
  });
});






describe('test5', () => {
  
    it('successfully registration', () => {
      cy.log('successfully purchase');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
      const email = `testuser${Math.floor(Math.random() * 100000)}@example.com`;
      const password = `testpassword${Math.floor(Math.random() * 100000)}`;
      const securityAnswer = `Answer${Math.floor(Math.random() * 100000)}`;
  
      cy.get('#emailControl').type(email);
      cy.get('#passwordControl').type(password);
      cy.get('#repeatPasswordControl').type(password)
  
      const randomSecurityQuestionIndex = Math.floor(Math.random() * 3); 
      cy.get('#mat-select-0').click();
      cy.get('.mat-option').eq(randomSecurityQuestionIndex).click();
  
      cy.get('#securityAnswerControl').type(securityAnswer);
  
  
      cy.get('#registerButton').click();
  
  
      cy.url().should('include', '/login'); 
      cy.get('.ng-tns-c70-15 .mat-simple-snack-bar-content ').should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); 
  
  
      Cypress.env('email', email);
      Cypress.env('password', password);
      
    });
  
    it('successfull purchase', () => {
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
  
      const email = Cypress.env('email'); 
      const password = Cypress.env('password');
  
   
      cy.get('#email').type(email);
      cy.get('#password').type(password);
  
     
      cy.get('#loginButton').click();
  
      cy.url().should('include', '/search');
  
      cy.get('.heading.mat-elevation-z6 ').should('be.visible').should('have.text','All Products');
  
      cy.get('.btn-basket').first().click();
          
          const country = `country${Math.floor(Math.random() * 100000)}`;
          const name = `name${Math.floor(Math.random() * 100000)}`;
          const mobileNumber = `${Math.floor(1000000000 + Math.random() * 9000000000).toString().slice(0, 10)}`;
          const zipCode = `${Math.floor(Math.random() * 100000)}`;
          const address = `address${Math.floor(Math.random() * 100000)}`;
          const city = `city${Math.floor(Math.random() * 100000)}`;
          const state = `state${Math.floor(Math.random() * 100000)}`;
  
          cy.get('.mat-snack-bar-container',{ timeout: 100000 }).should('be.visible')
          cy.get('.mat-simple-snackbar.ng-star-inserted',{ timeout: 100000 }).should('be.visible').should('contain','Placed Apple Juice (1000ml) into basket.'); 
  
         
          cy.get('[routerlink="/basket"]').click();
      
         
        
          cy.get('[data-icon="cart-arrow-down"]').click();
  
          cy.get('.mat-button-wrapper').should('contain','Add New Address')
          cy.get('[routerlink="/address/create"]').click();
      
  
          cy.get('[placeholder="Please provide a country."]').type(country);
          cy.get('[placeholder="Please provide a name."]').type(name);
          cy.get('[placeholder="Please provide a mobile number."]').type(mobileNumber);
          cy.get('#address').type(address);
          cy.get('[placeholder="Please provide a city."]').type(city);
          cy.get('[placeholder="Please provide a ZIP code."]').type(zipCode);
          cy.get('[placeholder="Please provide a state."]').type(state);
      
          cy.contains('Submit').click();
      
          cy.get('.mat-radio-inner-circle').first().click();
          cy.contains('Continue').click();
      
          cy.get('.mat-radio-inner-circle').first().click();
          cy.contains('Continue').click();
  
  
          cy.contains('Add a credit or debit card').click();
  
  
          const Name = 'John Doe';
          cy.contains('Name').parents('span').siblings('input').type(Name);
  
          cy.contains('Card Number').parents('span').siblings('input').type('4242424242424242');;
  
          const randomMonth = Cypress._.random(1, 12);
          cy.contains('Expiry Month').parents('span').siblings('select').select(randomMonth.toString());
  
          cy.contains('Expiry Year').parents('span').siblings('select').select('2080');
  
          cy.get('#submitButton').click();
  
          cy.get('.mat-radio-inner-circle').first().click();
          cy.contains('Continue').click();
  
          cy.get('#checkoutButton').click();
  
          cy.contains('Thank you for your purchase!').should('be.visible');
  })
  })
  
  describe('test6', () => {
    
    it('Solves the captcha and enters the result', () => {
      cy.log('Captcha');
      // Visit the website
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact'); // Замените 'your_website_url' на фактический URL вашего сайта
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
      cy.get('#comment').type('new_comment');
  
      cy.get('#rating').click();
  
      //Get the captcha container element
      cy.get('[style="margin-bottom: 10px; margin-top: 10px;"]').as('captchaContainer');
  
      // Get the captcha text element
      cy.get('#captcha').invoke('text').then((captchaText) => {
        // Extract numbers and operators from the captcha text
        const [num1, operator1, num2, operator2, num3] = captchaText
          .match(/(\d+|[+\-*\/])/g)
          .map((str) => str.trim());
  
        // Calculate the result
        const result =
          eval(`${parseInt(num1)} ${operator1} ${parseInt(num2)} ${operator2} ${parseInt(num3)}`);
  
        // Enter the result in the input field
        cy.get('#captchaControl').type(result);
  
        // Submit the form or perform other actions as needed
        cy.get('#submitButton').click(); // Замените 'form' на селектор вашей формы
        cy.get('.mat-simple-snack-bar-content').contains('Thank you for your feedback.'); 
      });
    });
  });
  
  
  
  
  
  
  
  describe('test with helper function', () => {
    it('successfully registration', () => {
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
      const email = `testuser${Math.floor(Math.random() * 100000)}@example.com`;
      const password = `testpassword${Math.floor(Math.random() * 100000)}`;
      const securityAnswer = `Answer${Math.floor(Math.random() * 100000)}`;
  
      cy.get('#emailControl').type(email);
      cy.get('#passwordControl').type(password);
      cy.get('#repeatPasswordControl').type(password)
  
      const randomSecurityQuestionIndex = Math.floor(Math.random() * 3); 
      cy.get('#mat-select-0').click();
      cy.get('.mat-option').eq(randomSecurityQuestionIndex).click();
  
      cy.get('#securityAnswerControl').type(securityAnswer);
  
  
      cy.get('#registerButton').click();
  
  
      cy.url().should('include', '/login'); 
      cy.get('.ng-tns-c70-15 .mat-simple-snack-bar-content ').should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); 
  
  
      Cypress.env('email', email);
      Cypress.env('password', password);
      
    });
  
    it('successfull purchase', () => {
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
  
      const email = Cypress.env('email'); 
      const password = Cypress.env('password');
  
   
      cy.get('#email').type(email);
      cy.get('#password').type(password);
  
     
      cy.get('#loginButton').click();
  
      cy.url().should('include', '/search');
  
      cy.get('.heading.mat-elevation-z6 ').should('be.visible').should('have.text','All Products');
  
       cy.log('helper function');
        search('Apple Juice (1000ml)');
      
        cy.get('.btn-basket').first().click();
  
      const country = `country${Math.floor(Math.random() * 100000)}`;
        const name = `name${Math.floor(Math.random() * 100000)}`;
        const mobileNumber = `${Math.floor(1000000000 + Math.random() * 9000000000).toString().slice(0, 10)}`;
        const zipCode = `${Math.floor(Math.random() * 100000)}`;
        const address = `address${Math.floor(Math.random() * 100000)}`;
        const city = `city${Math.floor(Math.random() * 100000)}`;
        const state = `state${Math.floor(Math.random() * 100000)}`;
  
        cy.get('.mat-snack-bar-container',{ timeout: 100000 }).should('be.visible')
        cy.get('.mat-simple-snackbar.ng-star-inserted',{ timeout: 100000 }).should('be.visible').should('contain','Placed Apple Juice (1000ml) into basket.'); 
  
       
        cy.get('[routerlink="/basket"]').click();
    
       
      
        cy.get('[data-icon="cart-arrow-down"]').click();
  
        cy.get('.mat-button-wrapper').should('contain','Add New Address')
        cy.get('[routerlink="/address/create"]').click();
    
  
        cy.get('[placeholder="Please provide a country."]').type(country);
        cy.get('[placeholder="Please provide a name."]').type(name);
        cy.get('[placeholder="Please provide a mobile number."]').type(mobileNumber);
        cy.get('#address').type(address);
        cy.get('[placeholder="Please provide a city."]').type(city);
        cy.get('[placeholder="Please provide a ZIP code."]').type(zipCode);
        cy.get('[placeholder="Please provide a state."]').type(state);
    
        cy.contains('Submit').click();
    
        cy.get('.mat-radio-inner-circle').first().click();
        cy.contains('Continue').click();
    
        cy.get('.mat-radio-inner-circle').first().click();
        cy.contains('Continue').click();
  
  
        cy.contains('Add a credit or debit card').click();
  
  
        const Name = 'John Doe';
        cy.contains('Name').parents('span').siblings('input').type(Name);
  
        cy.contains('Card Number').parents('span').siblings('input').type('4242424242424242');;
  
        const randomMonth = Cypress._.random(1, 12);
        cy.contains('Expiry Month').parents('span').siblings('select').select(randomMonth.toString());
  
        cy.contains('Expiry Year').parents('span').siblings('select').select('2080');
  
        cy.get('#submitButton').click();
  
        cy.get('.mat-radio-inner-circle').first().click();
        cy.contains('Continue').click();
  
        cy.get('#checkoutButton').click();
  
        cy.contains('Thank you for your purchase!').should('be.visible');
  })
  })
  
  
  