describe("Before method", () => { 
    
  before(() => { // before виконується один раз перед усім test suit

  it("Test 1", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })
})
    
    it("Test 2", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    cy.get('[placeholder="Jane Doe"]').type('Hello');
    })

})


describe("Before each method", () => { 
    
  beforeEach(() => { 
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  })
    
    it("Test 1", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
    })
  
    it("Test 2", () => {
      cy.get('[placeholder="Jane Doe"]').type('Hello');
    })
  })


  describe("After method", () => { 
    
    beforeEach(() => { 
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

      cy.log(`Open "Form Layouts" page....`);
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
    })
      
      after(()=> {
      cy.log('HELLO');
      })
    
      it("Test 1", () => {
        cy.get('[placeholder="Jane Doe"]').type('Hello');
      })
    

      it("Test 2", () => {
        cy.get('[placeholder="Jane Doe"]').type('Hello');
      })
    })


    describe("After each method", () => { 
    
      beforeEach(() => { 
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  
        cy.log(`Open "Form Layouts" page....`);
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
      })
        
        afterEach(()=> {
        cy.log('HELLO')
        })
      
        it("Test 1", () => {
          cy.get('[placeholder="Jane Doe"]').type('Hello');
        })
      
  
        it("Test 2", () => {
          cy.get('[placeholder="Jane Doe"]').type('Hello');
        })


        afterEach(()=> {
          cy.log('HELLO!!!!!!!')
          })
      })


      it.only("Test retries", {retries: 2}, () => { //retries - скільки разів прогнати тест якщо він зафейлився
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  
        cy.log(`Open "Form Layouts" page....`);
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
        cy.get('[placeholder="Jane Doe"]').type('Hello');
      })
    
    