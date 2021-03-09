// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('createOng', (nameOng, email, phone, city, uf) => {

    cy.request({
        method: 'POST',
        url: Cypress.env('hostApi') + Cypress.env('ong_url'),
        body: {
            name: nameOng,
            email: email,
            whatsapp: phone,
            city: city,
            uf: uf,
        }
    }).then(response => {
        expect(response.body.id).is.not.null;
        cy.log(response.body.id)
        Cypress.env('createOngIdEnv', response.body.id)
        return response.body.id
    })
})