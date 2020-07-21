class homepage{
    searchbox(){
        return  cy.get('input[placeholder= "eg. infosys"]')
    }
    searchitem(){
        return cy.get('ul li:first').should('have.class','active')
    }
    price(){
        return cy.get('#content-area > section:nth-child(5) > ul > li:nth-child(2) > b')
    }
}
export default homepage