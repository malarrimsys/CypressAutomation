describe('Test Suite',function ()
{ 
    it('Test case login ',function ()
    {
        cy.visit('https://intuitivesurgical.dev-rimsys.com/login')
        cy.get('#username').type('surgical@yopmail.com')
        cy.get('#password').type('Surgical2@123456')
        cy.get("button[type='submit']").click()
    })
    it('Test case Tasks', function ()
    {
        
    })
})