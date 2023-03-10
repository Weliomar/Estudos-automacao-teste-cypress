describe('Transações', () => {
   
   //Hooks
   beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#")
   });
   /*
    it('Cadastrar uma entrada', () => {
        //conectarSite()

        addTransaction("Freela", 380, "2023-03-09")
      
        cy.get("tbody tr td.description").should("have.text", "Freela")

    });

    it('Cadastrar uma saída', () => {
        addTransaction("Cinema", -80, "2023-03-10")
      
        cy.get("tbody tr td.description").should("have.text", "Cinema")
    });
*/
    it('Excluir transação', () => {
        addTransaction("Frella", 1000, "2023-03-10")
        addTransaction("Mesada", 100, "2023-03-10")

        /*
        cy.contains(".description", "Frella")
        .parent()
        .find('img')
        .click()
        */

        cy.contains(".description", "Frella")
        .siblings()
        .children('img')
        .click()

        cy.get('tbody tr').should("have.length", 1)
    });
});

function addTransaction(descricao, valor, data) {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type(data) // Mascara yyyy-mm-dd
    cy.contains('button','Salvar').click()
}
