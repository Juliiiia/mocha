// describe("Not parametrized test", () => {

//     it("Form without labels", () => {
//         cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
//         cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//         cy.get('[title="Forms"]').click();
//         cy.get('[title="Form Layouts"]').click();
//         cy.get('[placeholder="Recipients"]').type('Yuliia Buchynska');
//         cy.get('[placeholder="Subject"]').type("Request");
//         cy.get('[placeholder="Message"]').type("Please work");
//         cy.get('.status-success').click();
       
//     })
// })

// describe("Parametrized test", () => {

//     before(() => {
//         cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
//         cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//         cy.get('[title="Forms"]').click();
//         cy.get('[title="Form Layouts"]').click();

//     })

//     it("Form without labels", () => {
//         cy.get('[placeholder="Recipients"]').type('Yuliia Buchynska');
//         cy.get('[placeholder="Subject"]').type("Request");
//         cy.get('[placeholder="Message"]').type("Please work");
//         cy.get('.status-success').click();

//     })

// })


// const testNGX = (testData, expectedResult) => {
//     cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
//     cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//     cy.get('[title="Forms"]').click();
//     cy.get('[title="Form Layouts"]').click();

//     cy.get('[placeholder="Recipients"]').type('testData');
//     cy.get('[placeholder="Recipients"]').should('contain', expectedResult)
// }

// it("Form without labels", testNGX('Yuliia Buchynska', "Yuliia Buchynska"));


// describe('TestNGX', () => {
//     const tests = [
//         {testData: 'Yuliia', expectedResult: 'Yuliia'},
//     ]
   

//     before(() => {
//         cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
//         cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//         cy.get('[title="Forms"]').click();
//         cy.get('[title="Form Layouts"]').click();
//     })

//     tests.forEach(({testData, expectedResult}) => {
//         it("Recipients" , () => {
//             cy.get('[placeholder="Recipients"]').type(testData);
//             cy.get('[placeholder="Recipients"]').should('contain', expectedResult)

       
//         })

//     })
// })


describe('Form without labels', () => {
    
    const tests = (recipientText, subjectText, messageText, recipientCheck, subjectCheck, messageCheck) =>
    function () {
       cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
       cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
       cy.get('[title="Forms"]').click();
       cy.get('[title="Form Layouts"]').click();
       cy.get('[placeholder="Recipients"]').type(recipientText);
       cy.get('[placeholder="Recipients"]').should('contain.value', recipientCheck);
       cy.get('[placeholder="Subject"]').type(subjectText);
       cy.get('[placeholder="Subject"]').should('contain.value', subjectCheck);
       cy.get('[placeholder="Message"]').type(messageText);
       cy.get('[placeholder="Message"]').should('contain.value', messageCheck);
       cy.get('.status-success').click();
    }

    it('Yuliia', tests('Yuliia Buchynska', 'Request', 'Please work', 'Yuliia Buchynska', 'Request','Please work' ));
    it('John Doe', tests('John Doe', 'Question', 'Hello world','John Doe', 'Question', 'Hello world' ));
})
