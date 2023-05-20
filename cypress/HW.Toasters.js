describe('Toaster configurations', () => {
    
    beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Modal & Overlays"]').click();
      cy.get('[title="Toastr"]').click();
    })

    const testToaster = (testTitle, testContent, testPosition, testStatus, haveColor, haveIcon) => {
      cy.get('[data-name="menu"]').click();
      cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button').click();
      cy.get('nb-option').contains(`${testPosition}`).click();
      cy.get('[name="title"]').should('contain.value', `${testTitle}`);
      cy.get('[name="content"]').should('contain.value', `${testContent}`);
      cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button').click();
      cy.get('nb-option').contains(`${testStatus}`).click();
      cy.get('nb-card-footer > .status-basic').click();
      cy.get('nb-toast').should('have.css', 'background-color', haveColor);
      cy.get('nb-toast').find(`${haveIcon}`).should('exist');

    };
  
    it('testToaster1', () => testToaster("HI there!", "I'm cool toaster!", "bottom-right", "success", "rgb(96, 175, 32)", '[data-name="checkmark"]'));
    it('testToaster2', () => testToaster("HI there!", "I'm cool toaster!", "top-left", "info", "rgb(4, 149, 238)",'[data-name="question-mark"]'));
    it('TestToaster3', () => testToaster("HI there!", "I'm cool toaster!", "top-right", "warning", "rgb(255, 159, 5)", '[data-name="alert-triangle"]'));
    it('TestToaster4', () => testToaster("HI there!", "I'm cool toaster!", "bottom-left", "danger", "rgb(176, 0, 32)", '[data-name="flash"]'));
  });
  

