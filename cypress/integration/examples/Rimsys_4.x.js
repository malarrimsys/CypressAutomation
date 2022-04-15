
import RimsysLoginPage from  "../pageObjects/RimsysLoginPage"; 
describe('RIM Test Suite',function ()
{ 
    before(function(){
        cy.fixture('rimsys').then(function(data){
            this.data=data
        })
    })
    it('Test case:login ',function ()
    {
       cy.visit(Cypress.env('rimsysurl'))
       const loginPage = new RimsysLoginPage;
       loginPage.login()
    })
    it('Test case Tasks', function ()
    {
        
    })
})