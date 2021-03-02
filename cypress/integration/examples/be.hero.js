describe('Be the Hero end-to-end testing', () => {
    it('Login from Be the Hero', () => {
        cy.visit('http://localhost:3000/')
        
    });
});

describe('Create a new user', () => {
    it('Input all fields correctly', () => {
        cy.visit('http://localhost:3000/')

        cy.get('.back-link').click()
        cy.get('[placeholder="Nome da ONG"]').type("Guilherme")
        cy.get('[type="email"]').type("teste@gmail.com")
        cy.get('[placeholder="WhatsApp"]').type('19999999999')
        cy.get('[placeholder="Cidade"]').type("Campinas")
        cy.get('[placeholder="UF"]').type("SP")
        cy.screenshot()
        cy.get('.button').click()
    });
});