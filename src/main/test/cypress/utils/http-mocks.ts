import faker from 'faker'

export const mockUnauthorizedError = (url: RegExp): void => {
  cy.server()
  cy.route({
    method: 'POST',
    url,
    status: 401,
    response: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockForbiddenError = (url: RegExp, method: string): void => {
  cy.server()
  cy.route({
    method,
    url,
    status: 403,
    response: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockServerError = (url: RegExp, method: string): void => {
  cy.server()
  cy.route({
    method,
    url,
    status: faker.helpers.randomize([400, 404, 500]),
    response: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockOk = (url: RegExp, method: string, response: any): void => {
  cy.server()
  cy.route({
    method,
    url,
    status: 200,
    response
  }).as('request')
}
