describe('Form Submission', () => {
    it('Submits the form successfully', () => {
      
      cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform')

      cy.get('div  > input[type="text"]').type('MADHANKUMAR')
      cy.get('div  > [data-value="18 or above"]').click()
      cy.get('div[class="e2CuFe eU809d"]').click({force:true})
    
     cy.contains('div[jsname="V68bde"] div span','Yes').click({force:true})
      cy.contains('div[role="button"]  span span','Submit').click()
      cy.contains('Your response has been recorded.').should('be.visible')
    })

    
})