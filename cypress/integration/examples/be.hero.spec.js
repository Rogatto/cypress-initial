let ongLoginId;

describe('Create a new ong account', () => {
    it('Create new account', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.back-link').click()
        cy.get('[placeholder="Nome da ONG"]').type("Guilherme 2")
        cy.get('[type="email"]').type("teste@gmail.com")
        cy.get('[placeholder="WhatsApp"]').type('19999999999')
        cy.get('[placeholder="Cidade"]').type("Campinas")
        cy.get('[placeholder="UF"]').type("SP")
        
        cy.intercept('POST', '/ongs').as('ongsResponse')

        cy.screenshot()
        cy.get('.button').click()
   
            cy.wait('@ongsResponse').then((res) => {
                expect(res.response.statusCode).to.be.eq(200);
                expect(res.response.body.id).to.be.exist;
    
                ongLoginId = res.response.body.id;
            });
    });
});

describe('Make login with the new account', () => {
    it('Login with success', () => {
        cy.log('Login id created: ', ongLoginId)
        cy.get('input').type(ongLoginId)
        cy.get('.button').click()
        cy.contains('vinda').check;
    });
});


describe('Input new case and search all cases inserted', () => {
    it('Inout new case with success', () => {
        cy.get('.button').click();
        cy.get('[placeholder="Titulo do Caso"]').type('Institudo XY')
        cy.get('textarea').type('Temos diversos cachorros e gatos')
        cy.get('[placeholder="Valor em Reais"]').type(3000)

        cy.intercept('GET', '/profile',{ fixture: 'profiles.json' })

        cy.get('.button').click();

    });

    it('search all cases inserted', () => {
        cy.get('.profile-container')
        .should('contain','Institudo XYzzzzzzz')
        .and('contain', 'Temos diversos cachorros e gatosssss')
        .and('contain', '5,00')
    });
});