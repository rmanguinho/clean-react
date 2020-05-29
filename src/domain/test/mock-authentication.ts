import { Authentication, AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import faker from 'faker'

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid(),
  name: faker.name.findName()
})

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: AuthenticationParams
  callsCount = 0

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
