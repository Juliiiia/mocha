// // const testGoogle = (testData, expectedResult) => {
// // cy.visit('https://google.com');
    
// //     cy.get('textarea.gLFyf').type(testData);
// //     cy.get('div.wM6W7d').should('contain', expectedResult);

// // }

// // it('search for cypress', testGoogle('CYPRESS', 'cypress'));
// // it('search for audi', testGoogle('AUDI', 'audi'));
// // it('search for bmw', testGoogle('CBMW', 'bmw'));


// describe.only('Multiple tests', () => {
//     const tests = [
//         {testData: [1], expectedResult: '1'},
//         {testData: [2], expectedResult: '2'},
//         {testData: [3], expectedResult: '3'},
//     ]


//     tests.forEach(({testData, expectedResult}) => {
//         it("Test ", () => {
//             cy.visit('https://google.com');

//             cy.get('textarea.gLFyf').type(testData);
//             cy.get('div.wM6W7d').should('contain', expectedResult);

//         })
//     })
// })

describe('Multiple tests', () => {
    const testGoogle = (testData, expectedResult) =>

    function () {
      cy.visit('https://google.com');
      cy.get('textarea.gLFyf').type(`${testData}`);
      cy.get('div.wM6W7d').should("contain", `${expectedResult}`)
    };

  it('search for CYPRESS', testGoogle('CYPRESS', 'cypress'));
  it('search for AUDI', testGoogle('AUDI', 'audi'));
  it('search for BMW', testGoogle('BMW', 'bmw'));
})

describe('Multiple tests', () => {
    const tests = [
        {testData: 'CYPRESS', expectedResult: 'cypress'},
        {testData: 'AUDI', expectedResult: 'audi'},
        {testData: 'BMW', expectedResult: 'bmw'}
    ]

    tests.forEach(({testData, expectedResult}) => {
        it(`Test ${testData}`, () => {
            cy.visit('https://google.com');
            cy.get('textarea.gLFyf').type(testData);
            cy.get('div.wM6W7d').should('contain', expectedResult);
        })
    })
})