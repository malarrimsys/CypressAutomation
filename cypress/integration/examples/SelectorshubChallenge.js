describe('Selectorshub Challenge',function(){
    it('Enter Username',function(){
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('label > svg').click()
        cy.get('[placeholder="First Enter name"]').type('Malar')
        cy.get('[placeholder="Enter Last name"]').invoke('removeAttr','disabled')
        cy.get('[placeholder="Enter Last name"]').type('Palani')
        cy.get('.dropbtn').click()
    })
})