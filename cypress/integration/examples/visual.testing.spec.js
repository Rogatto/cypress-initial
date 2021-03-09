describe('Validate a visual testing example', () => {
    it.skip('Visual testing on login page', () => {
        cy.visit('/').then(() => {
            cy.get('#root')
              .toMatchImageSnapshot();
          });
    });


    it('Visual testing on login page with percy', () => {
        cy.visit('/')
        cy.percySnapshot('firstTestWithPercy')
    });
});