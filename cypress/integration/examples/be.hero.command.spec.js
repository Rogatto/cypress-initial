describe('xyz', () => {
    it('pmz', () => {
 
        cy.createOng('Ong protetora', 'ong@mail.com', '11999934444', 'Campinas', 'SP')

        const createOngId = Cypress.env('createOngIdEnv')

        cy.visit('http://localhost:3000/')

        cy.get('input').type(createOngId)

    });
});