import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let msg;

Given(/^I am on the bank app$/, () => {
	cy.visit('/')
});

When(/^I click on the bank login button$/, () => {
	cy.clickElement('[ng-click="manager()"]')
});

When(/^I click  on add customer button$/, () => {
	msg = cy.stub()
	cy.on('window:alert', msg)
	cy.fixture('selectors').then((sel) => {
		cy.clickElement(sel.addCustomerBtn)
	})
});

When(/^I type in the first name$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.typeAText(sel.fNameField, sel.fName)
	})
});

When(/^I type in the last name$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.typeAText(sel.lNameField, sel.lName)
	})
});


When(/^I type in the post code$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.typeAText(sel.pCodeField, sel.postCd)
	})
});

When(/^I click on create customer button$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.clickElement(sel.createBtn)
	})
});

Then(/^I should see the customer profile$/, () => {
	cy.HandleSuccessAlert(msg, 'Customer added successfully with customer id :6')
});

When(/^I click on open account button$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.clickElement(sel.createAccountBtn)
	})
});

When(/^I select the customer name$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.selectValue(sel.customerList, sel.fName + ' ' + sel.lName)
	})
});

When(/^I select the currency$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.selectValue(sel.currencyList, sel.currency)
	})
});

When(/^I click on the process button$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.clickElement(sel.createBtn)
	})
});

Then(/^I should see the account number$/, () => {
	cy.HandleSuccessAlert(msg, 'Account created successfully with account Number :1016')
});

When(/^I click on the customers button$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.clickElement(sel.customerListBtn)
	})
});

When(/^I search for the user$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.typeAText(sel.searchField, sel.fName)
	})
});

Then(/^I click on the delete button$/, () => {
	cy.fixture('selectors').then((sel) => {
		cy.clickElement(sel.deleteBtn)
	})
});

When(/^I type in the "([^"]*)", "([^"]*)", "([^"]*)"$/, (first,last,code) => {
	cy.fixture('selectors').then((sel) => {
		cy.typeAText(sel.fNameField, `${first}`)
		cy.typeAText(sel.lNameField, `${last}`)
		cy.typeAText(sel.pCodeField, `${code}`)
	})
});

When(/^I select the customer "([^"]*)"$/, (args1) => {
	cy.fixture('selectors').then((sel) => {
		cy.selectValue(sel.customerList, `${args1}`)
	})
});

When(/^I search for the "([^"]*)"$/, (args1) => {
	cy.fixture('selectors').then((sel) => {
		cy.typeAText(sel.searchField, `${args1}`)
	})
});


Then(/^I should see the following buttons$/, (datatable) => {
	datatable['hashes']().forEach((row)=>{
		cy.contains(row.buttonName).should('exist').and('contain', row.buttonName)
	})
});

