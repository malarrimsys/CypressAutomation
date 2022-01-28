/// <reference types = "Cypress" />

describe('First test suite',function()
{
    it.skip('First test case',function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000) //dont have loading icon 
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productlocator')    //aliasing centralizing the web element
        cy.get('@productlocator').find('.product').should('have.length',4) //parent -child chaining 
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('checking async  ')
        })
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {

                const textVal = $el.find('h4.product-name').text()
                if(textVal.includes('Cashews'))
                {
                    cy.wrap($el).find('button').click().then(function()
                    {
                        console.log('inside if ')
                    })
                   // console.log('inside if ') //does not execute in order :non cypress commands. we have to resolve using then()
                }
                     // const logo =cy.get('.brand') //non cypress code will throw an error since cypress confuse to resolve internally we have to handle the promise using then () method
        
            })
        cy.get('.brand').should('have.text','GREENKART') //assertion 
            //to print in command logs
        cy.get('.brand').then(function(logo_element) //resolved variable is now logo_element
        {
            cy.log(logo_element.text()) //text() is not cypress commands
        })
    })
   it.skip('Proceed checkout',function()
   {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').each(($el, index, $list) => {

        const textVal = $el.find('h4.product-name').text()
        if(textVal.includes('Cashews'))
        {
            cy.wrap($el).find('button').click().then(function()
            {
                console.log('inside if ')
            })
        }
     })
     cy.get('.cart-icon > img').click()
     cy.get('.cart-preview > .action-block > button').click()
     cy.contains('Place Order').click()
   })
   it('Handling WebControls',function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       //cy.get('#checkBoxOption1').click()
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //along with assertions
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
       //multiple checkbox at a time
       cy.get("input[type='checkbox'").check(['option2','option3'])
       //cy.get("input[type='checkbox'").check()
       cy.get('select').select('option3').should('have.value','option3')  
       cy.get('#autocomplete').type('ind')
       //cy.get('.ui-menu-item').eq(1).contains('India').click()
       cy.get('.ui-menu-item').each(($el,index,$list)=>
       {
           if($el.text()===('India'))
           {
              cy.wrap($el).click()
           }
       })
       cy.get('#autocomplete').should('have.value','India')
       //visibility invisible mode
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get("[value='radio1']").check().should('be.checked')
    })
   
})