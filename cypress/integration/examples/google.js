describe('My First Test', () => {
    it('finds anything on google search"', () => {
      cy.visit('https://www.google.com/')
  
      cy.get('input[name="q"]')
      .type("teste")
    
      //cy.get('input[name="btnK"]').click()
      cy.contains('Pesquisa Google').click()
    })
  })