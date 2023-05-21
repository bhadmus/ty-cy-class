
Cypress.Commands.add('typeAText', (field, text)=>{
    cy.get(field).should('exist').type(text)
})

Cypress.Commands.add('HandleSuccessAlert', (stub, message)=>{
	expect(stub).to.have.been.calledWith(message)
})

Cypress.Commands.add('selectValue', (element, value)=>{
    cy.get(element).should('exist').select(value)
})