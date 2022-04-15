describe('Test Suite',function ()
{ 
    it('Test case login ',function ()
    {
        // cy.visit('https://intuitivesurgical.dev-rimsys.com/login')
        // cy.get('#username').type('surgical@yopmail.com')
        // cy.get('#password').type('Surgical2@123456')
        // cy.get("button[type='submit']").click()
        cy.visit('qa.rimsys.dev')
        cy.get("button[type='button']").eq(1).click()
        const options = {

            method : 'POST',
            url : 'https://qa.rimsys.dev/login',
            qs : {
              redirectTo : 'https://qa.rimsys.dev/redirect/google/set_token'
    
            },
            body : {
              username: 'malar@rimsys.io',
              password : 'Rimsys@123'
            },
            form : true
          }
    
          cy.request(options)
          //Cypress runs your test on browser
      //SSO - email password //ca -> redirect to 
          cy.visit("https://qa.rimsys.dev/")
          
    })

})