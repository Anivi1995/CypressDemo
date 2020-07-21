describe('Signup & Signin',function(){
    it('sign up', function(){
        cy.visit('https://www.google.co.in/')
        cy.wait(5000)
        cy.get('input[name="q"]').type('Cypress{enter}')
       
    

    })
}
)