import { AddAccountParams, AddAccount } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import faker from 'faker'

export const mockAddAccountParams = (): AddAccountParams => {
  const password = faker.internet.password()
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password,
    passwordConfirmation: password
  }
}

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccountParams
  callsCount = 0

  async add (params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
