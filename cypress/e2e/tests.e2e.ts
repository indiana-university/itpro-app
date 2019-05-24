describe('admin user', () => {

    it('creates new unit and deletes it', () => {
        cy.visit('/')
        cy.getByText(/log in/i).click()
        cy.getByText(/units/i).click()
        cy.getByText(/add new unit/i).click()
        cy.getByLabelText(/name/i).type('Test unit')
        cy.getByLabelText(/description/i).type('Test desc')
        cy.getByLabelText(/url/i).type('https://iu.edu')
        cy.getByText('Save').click()
        cy.getByText('Test unit').click()
        cy.getByTitle(/Delete:/).click()
        cy.queryByText('Test unit').should('not.be.visible')
    })

    it.only('adds unit member & tool -> removes them', () => {
        cy.visit('/')
        cy.getByText(/log in/i).click()
        cy.visit('/units/2')
        cy.queryByTitle(/edit/i).click()
        cy.getByText(/add member/i).click()
        cy.getByLabelText(/search/i).type('sebastian')
        cy.getByText(/sebastian/i).click()
        cy.getByText(/submit addition/i).click()
        cy.queryByText(/sebastian/i).should("be.visible")
        cy.getByTitle(/edit tools/i).click()
        cy.getByLabelText(/survey/i).check({ force: true })
        cy.getByText(/update/i).click()
        cy.wait(1) // 1 ms wait gives list time to populate
        cy.queryByTitle(/edit tools/i).click()
        cy.queryByLabelText(/survey/i).uncheck({ force: true })
        cy.getByText(/update/i).click()
        cy.wait(1)
        cy.queryByTitle(/edit tools/i).click()
        cy.queryByLabelText(/survey/i).should("not.be.checked")
        cy.getByText(/update/i).click()
        cy.getByTitle(/remove member/i).click()
        cy.queryByText(/sebastian/i).should("not.be.visible")
    })
})
describe('standard user', () => {

    it('cannot edit or delete a unit', () => {
        cy.visit('/')
        cy.getByText(/log in/i).click()
        cy.visit('/units/1')
        cy.queryByTitle(/edit:/i).should("not.be.visible")
        cy.queryByTitle(/delete:/i).should("not.be.visible")
    })
})

describe('unit leader', () => {

    it('can edit unit, members & tools', () => {
        cy.visit('/')
        cy.getByText(/log in/i).click()
        cy.visit('/units/4')
        cy.queryByTitle(/delete:/i).should("not.be.visible")
        cy.getByTitle(/edit:/i).click()
        cy.getByTitle(/add leader/i).should("be.visible")
        cy.getByTitle(/add members/i).should("be.visible")
        cy.getByTitle(/add others/i).should("be.visible")
        cy.getByTitle(/edit tools/i).should("be.visible")
    })
})