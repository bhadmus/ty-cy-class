describe('Open the Bank app', () => {
  before('click manager login', () => {
    cy.visit('/')
    cy.get('[ng-click="manager()"]').should('exist').click()
  })

  it('Create Customer',()=>{
    cy.fixture('selectors').then((sel)=>{
      cy.clickElement(sel.addCustomerBtn)
      cy.typeAText(sel.fNameField, sel.fName)
      cy.typeAText(sel.lNameField, sel.lName)
      cy.typeAText(sel.pCodeField, sel.postCd)
      cy.clickElement(sel.createBtn)
      cy.on('window:alert', (message)=>{
        expect(['Customer added successfully with customer id :6', 'Account created successfully with account Number :1016']).to.contains(message)
      })
      cy.get(sel.createAccountBtn).should('exist').click()
      cy.get(sel.customerList).should('exist').select(sel.fName + ' ' + sel.lName)
      cy.get(sel.currencyList).should('exist').select(sel.currency)
      cy.get(sel.createBtn).click()
      cy.get(sel.customerListBtn).should('exist').click()
      cy.get(sel.searchField).should('exist').type(sel.fName)
      cy.get(sel.deleteBtn).should('exist').click()
    })
  })

})