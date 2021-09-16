import { AccountModel } from '@/domain/models'

import faker from 'faker'

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
  name: faker.name.findName()
})
