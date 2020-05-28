import { AccountModel } from '../models'

export interface UpdateCurrentAccount {
  save: (account: AccountModel) => Promise<void>
}
