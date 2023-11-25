export function search(itemName) {
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/search');
  
    cy.get('.mat-icon.mat-search_icon-search').type('Apple Juice (1000ml)');
  
    
    cy.get('.item-name').each(($item) => {
      const itemName = $item.text();
      if (itemName.includes('Apple Juice (1000ml)')) {
        $item.click();
      }
    });
  
    cy.get('[aria-label="Close Dialog"]').click();
  }
  
