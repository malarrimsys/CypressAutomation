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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('AddProducts',(productName)=> {
    cy.get('.card-title').each(($el,index,$lists)=>{
        if($el.text().includes(productName))
        {
         cy.get('.btn.btn-info').eq(index).click()
        }
    })
Cypress.Commands.add('VerifyPrice',(price)=>
{
    const totalPrice = price
    var s =0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$lists)=>{
        const amt = $el.text()
        var res= amt.split(" ")
        res=res[1].trim()
        s=Number(s)+Nember(res)
    }).then(function(){
        cy.log(s)
    }) 
    cy.get('tr td:nth-child(5) strong').then(function(element)
    {
        totalPrice = element.text()
    })
})      

})