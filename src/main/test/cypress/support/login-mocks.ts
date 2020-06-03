import * as Http from './http-mocks'
import faker from 'faker'

export const mockInvalidCredentialsError = (): void => Http.mockUnauthorizedError(/login/)
export const mockUnexpectedError = (): void => Http.mockServerError(/login/, 'POST')
export const mockOk = (): void => Http.mockOk(/login/, 'POST', { accessToken: faker.random.uuid(), name: faker.name.findName() })
